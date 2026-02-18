// ==UserScript==
// @icon https://github.com/SkyK0T/SkyTV/blob/main/skykotik.gif?raw=true
// @name 👉YouTube👈Точная дата публикации 0.5🧸
// @version 0.5
// @description    👉YouTube👈Точная дата публикации 0.5🧸

// @author            InMirrors
// @match             https://www.youtube.com/*
// @match       *://m.youtube.com/*
// @match       *://www.youtube.com/feed/subscriptions/*
// @match       *://www.youtube-nocookie.com/*
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_registerMenuCommand
// @license           MIT
// @downloadURL none
// ==/UserScript==

/*
@match       *://www.youtube.com/*
@match       *://m.youtube.com/*
@match       *://www.youtube.com/feed/subscriptions/*
@match       *://www.youtube-nocookie.com/*
@match       *://www.youtube.com/@/*
*/
/*  */

(function () {
    'use strict';

    let debugModeEnabled = GM_getValue("debug", false);
    GM_registerMenuCommand(`Toggle Debug mode ${debugModeEnabled ? "OFF" : "ON"}`, () => {
        debugModeEnabled = !debugModeEnabled;
        GM_setValue("debug", debugModeEnabled);
        alert(`Debug mode is now ${debugModeEnabled ? "ON" : "OFF"}`);
    });

    function getUploadDate() {
        let el = document.body.querySelector('player-microformat-renderer script');
        if (el) {
            let parts = el.textContent.split('"startDate":"', 2);
            if (parts.length == 2) {
                return parts[1].split('"', 1)[0];
            }
            parts = el.textContent.split('"uploadDate":"', 2);
            if (parts.length == 2) {
                return parts[1].split('"', 1)[0];
            }
        }

        return null;
    }

    // Check if the video is a live broadcast
    function getIsLiveBroadcast() {
        let el = document.body.querySelector('player-microformat-renderer script');
        if (!el) {
            return null;
        }

        let parts = el.textContent.split('"isLiveBroadcast":', 2);
        if (parts.length != 2) {
            return false;
        }

        let isLiveBroadcast = !!parts[1].split(',', 1)[0];
        if (!isLiveBroadcast) {
            return false;
        }

        parts = el.textContent.split('"endDate":"', 2);
        if (parts.length == 2) {
            return false;
        }

        return true;
    }

    // Extract video id from the URL
    function urlToVideoId(url) {
        let parts = url.split('/shorts/', 2);
        if (parts.length === 2) {
            url = parts[1];
        } else {
            url = parts[0];
        }

        parts = url.split('v=', 2);
        if (parts.length === 2) {
            url = parts[1];
        } else {
            url = parts[0];
        }

        return url.split('&', 1)[0];
    }

    // Retrieve the upload date from a remote source using the video id and invoke the callback with the result
    function getRemoteUploadDate(videoId, callback) {
        let body = { "context": { "client": { "clientName": "WEB", "clientVersion": "2.20240416.01.00" } }, "videoId": videoId };

        fetch('https://www.youtube.com/youtubei/v1/player?prettyPrint=false', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(data => {
                let object = data.microformat.playerMicroformatRenderer;

                if (object.liveBroadcastDetails?.isLiveNow) {
                    callback(object.liveBroadcastDetails.startTimestamp);
                    return;
                } else if (object.publishDate) {
                    callback(object.publishDate);
                    return;
                }

                callback(object.uploadDate);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Convert ISO date string to a localized date string
    function isoToDate(iso) {
        let date = new Date(iso);

/*
let options = { day: 'numeric', month: 'short', year: 'numeric' };
let lang = navigator.language ? navigator.language : 'en-US';

month: 'long' полное название месяца
month: 'short'сокращённое название месяца
year: 'numeric' — год в числовом формате
было change the locale to use yyyy-mm-dd format
let options = { year: 'numeric', month: '2-digit', day: '2-digit', separator: '-' };
*/
        let options = {day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric"}
        let lang = 'ru-RU';
        return date.toLocaleDateString(lang, options).replaceAll('/', '-');
    }

    /**
     * Process and update upload date info for a video element
     * @param {string} videoId - YouTube video ID
     * @param {HTMLElement} dateElem - DOM element that holds the date
     * @param {HTMLElement} vidContainer - Container for updating date-text attribute
     * @param {string} originalDateText - The original relative time text
     */
    function fetchAndUpdateUploadDate(videoId, dateElem, vidContainer, originalDateText) {
        getRemoteUploadDate(videoId, (uploadDate) => {
            const formattedDate = isoToDate(uploadDate);
            let displayText;
            const oldUploadRegex = /days?|weeks?|months?|years?|天|日|周|週|月|年/;
            if (!oldUploadRegex.test(originalDateText)) {
                // Keep original + formatted date for recent uploads
                displayText = `${originalDateText} · ${formattedDate}`;
            } else {
                // Show only absolute date
                displayText = formattedDate;
            }
            dateElem.textContent = displayText;
            vidContainer.setAttribute('date-text', displayText); // Update date-text
        });
    }

    // Update the upload date and display style of video descriptions on the page
    function startTimers() {
        /* video page description */
        setInterval(() => {
            // Retrieve the upload date
            let uploadDate = getUploadDate();
            if (!uploadDate) {
                return;
            }

            // Format the date and check if it's a live broadcast
            uploadDate = isoToDate(uploadDate);
            let isLiveBroadcast = getIsLiveBroadcast();

            if (isLiveBroadcast) {
                document.body.classList.add('ytud-description-live');
            } else {
                document.body.classList.remove('ytud-description-live');
            }

            // Update the upload date in the video description
            let el = document.querySelector('#info-container > #info > b');
            if (!el) {
                let span = document.querySelector('#info-container > #info > span:nth-child(1)');
                if (!span) {
                    return;
                }
                el = document.createElement('b');
                el.textContent = uploadDate;
                span.insertAdjacentElement('afterend', el);
            } else {
                if (el.parentNode.children[1] !== el) {
                    let container = el.parentNode;
                    el = container.removeChild(el);
                    container.children[0].insertAdjacentElement('afterend', el);
                }
                if (el.firstChild.nodeValue === uploadDate) {
                    return;
                }
                el.firstChild.nodeValue = uploadDate;
            }
        }, 1000);

        /**
         * Finds and processes video elements on the page based on a given configuration.
         * This function queries for video containers, extracts metadata,
         * and updates the date information.
         * @param {object} config - Configuration for a specific type of video list.
         * @param {string} config.id - Identifier for the configuration.
         * @param {string} config.videoContainerSelector - CSS selector for the video container elements.
         * @param {string} config.metaSpansSelector - CSS selector for metadata spans within the video container.
         * @param {string} config.vidLinkSelector - CSS selector for the video link element.
         * @param {boolean} config.shouldCreateDateSpan - If a new date span needs to be created.
         * @param {number} config.insertAfterIndex - Index at which to insert the new date span.
         * @param {number} config.dateSpanIndex - Index of the date span in the metadata spans list.
         */
        function findAndProcessVids(config) {
            let vids = document.querySelectorAll(config.videoContainerSelector);
            if (vids.length === 0) {
                return; // No videos found for this config, just return.
            }

            if (debugModeEnabled && vids.length > 1) {
                // Process only one element to avoid excessive logging in debug mode.
                if (vids.length === 1) { vids = Array.from(vids).slice(0, 1); }
                else { vids = Array.from(vids).slice(0, 2); }
            }

            vids.forEach((vidContainer) => {
                const metaSpans = vidContainer.querySelectorAll(config.metaSpansSelector);
                if (metaSpans.length === 0) {
                    if (debugModeEnabled) console.warn(`No metaSpan found for [${config.id}]`);
                    return;
                }

                let dateSpan;
                // Check if a new date span needs to be created.
                if (config.shouldCreateDateSpan) {
                    dateSpan = document.createElement('span');
                    dateSpan.className = 'inline-metadata-item style-scope ytd-video-meta-block ytdf-date';
                    dateSpan.appendChild(document.createTextNode(''));
                    metaSpans[config.insertAfterIndex].insertAdjacentElement('afterend', dateSpan);
                } else {
                    dateSpan = metaSpans[config.dateSpanIndex];
                }

                if (!dateSpan) {
                    if (debugModeEnabled) console.warn(`dateSpan is null for [${config.id}]`);
                    return;
                }

                const dateText = dateSpan.textContent;
                const prevDateText = vidContainer.getAttribute('date-text');

                // Skip if already processed and the date text hasn't changed.
                if (prevDateText !== null) {
                    return;
                }

                // Mark as processed by setting the 'date-text' attribute.
                vidContainer.setAttribute('date-text', dateText);

                // Find the video link element to extract the video ID.
                const vidLinkElem = vidContainer.querySelector(config.vidLinkSelector);
                if (!vidLinkElem) {
                    if (debugModeEnabled) console.warn(`No vidLinkElem found for [${config.id}]`);
                    return;
                }

                const vidLink = vidLinkElem.getAttribute('href');
                if (!vidLink) {
                    if (debugModeEnabled) console.warn(`vidLink is null for [${config.id}]`);
                    return;
                }
                const videoId = urlToVideoId(vidLink);
                fetchAndUpdateUploadDate(videoId, dateSpan, vidContainer, dateText);
            });
        }

        // Configuration array for different video list types.
        const configs = [
            {
                id: 'Video Page Sidebar',
                videoContainerSelector: 'ytd-compact-video-renderer',
                metaSpansSelector: '#metadata-line > span',
                vidLinkSelector: 'a#thumbnail',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 1,
            },
            {
                id: 'Homepage Videos',
                videoContainerSelector: 'ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer',
                metaSpansSelector: '.yt-core-attributed-string--link-inherit-color',
                vidLinkSelector: '.yt-lockup-view-model__content-image',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 3,
            },
            {
                id: 'Homepage Shorts',
                videoContainerSelector: 'ytd-rich-grid-slim-media',
                metaSpansSelector: '#metadata-line > span',
                vidLinkSelector: 'a#thumbnail',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 1,
            },
            {
                id: 'Search List Videos',
                videoContainerSelector: 'ytd-video-renderer',
                metaSpansSelector: '#metadata-line > span',
                vidLinkSelector: 'a#thumbnail',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 1,
            },
            {
                id: 'Search List Shorts',
                videoContainerSelector: 'ytd-reel-item-renderer',
                metaSpansSelector: '#metadata-line > span',
                vidLinkSelector: 'a#thumbnail',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 1,
            },
            {
                id: 'Channel Featured Video',
                videoContainerSelector: 'ytd-channel-video-player-renderer',
                metaSpansSelector: '#metadata-line > span',
                vidLinkSelector: 'h3 > a',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 1,
            },
            {
                id: 'Channel For You Videos',
                videoContainerSelector: 'ytd-grid-video-renderer',
                metaSpansSelector: '#metadata-line > span',
                vidLinkSelector: 'a#thumbnail',
                shouldCreateDateSpan: false,
                insertAfterIndex: 0,
                dateSpanIndex: 1,
            },
            {
                id: 'Video Playlist',
                videoContainerSelector: 'ytd-playlist-panel-video-renderer',
                metaSpansSelector: '#video-info > span',
                vidLinkSelector: 'a',
                shouldCreateDateSpan: false,
                insertAfterIndex: 1,
                dateSpanIndex: 2,
            }
        ];

        // Set up timers for each configuration.
        configs.forEach(config => {
            setInterval(() => findAndProcessVids(config), 1000);
        });

        // This section for the topic sidebar is too different and is kept separate.
        /* search list - topic in sidebar */
        setInterval(() => {
            let vids = document.querySelectorAll('#contents > ytd-universal-watch-card-renderer > #sections > ytd-watch-card-section-sequence-renderer > #lists > ytd-vertical-watch-card-list-renderer > #items > ytd-watch-card-compact-video-renderer');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('div.text-wrapper > yt-formatted-string.subtitle');
                if (holders.length === 0) {
                    return;
                }

                let holder = holders[0];
                let separator = ' • ';
                let parts = holder.firstChild.nodeValue.split(separator, 2);
                if (parts.length < 2) {
                    return;
                }
                let prefix = parts[0] + separator;
                let dateText = parts[1];
                let text = el.getAttribute('date-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('date-text', dateText);
                let link = el.querySelector('a#thumbnail').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);
    }

    startTimers()

    let styleTag = document.createElement('style');
    let cssCode = "#info > span:nth-child(3) {display:none !important;}"
        + "#info > span:nth-child(4) {display:none !important;}"
        + "#info > b {font-weight:500 !important;margin-left:6px !important;}"
        + "#date-text {display:none !important;}"
        + ".ytud-description-live #info > span:nth-child(1) {display:none !important;}"
        + ".ytud-description-live #info > b {margin-left:0 !important;margin-right:6px !important;}";
    styleTag.textContent = cssCode;
    document.head.appendChild(styleTag);
})();
