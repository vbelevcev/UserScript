// ==UserScript==
// @icon https://github.com/SkyK0T/SkyTV/blob/main/skykotik.gif?raw=true
// @name        👉YouTube👈Точная дата публикации🧸
// @description Точная дата загрузки пользователем видео на YouTube вместо день/месяц/год назад

// @match       *://www.youtube.com/*
// @match       *://m.youtube.com/*
// @match       *://www.youtube.com/feed/subscriptions/*
// @match       *://www.youtube-nocookie.com/*
// @exclude     *://www.youtube.com/live_chat*

// @namespace   🧸
// @grant       👉🧸👈
// @author      👉🧸👈
// @version     1.0
// ==/UserScript==

/*
Настраиваемые форматы даты и времени
https://help.mindbox.ru/docs/%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%8B-%D0%B4%D0%B0%D1%82%D1%8B-%D0%B8-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8
https://uploaddate.com/codes

Show YouTube Video Upload Date
https://chromewebstore.google.com/detail/show-youtube-video-upload/amdebbajoolgbbgdhdnkhmgkkdlbkdgi

https://greasyfork.org/ru/scripts/493024-%E4%BB%A5%E7%BB%9D%E5%AF%B9%E6%97%B6%E9%97%B4%E6%98%BE%E7%A4%BA-youtube-%E7%9A%84%E8%A7%86%E9%A2%91%E4%B8%8A%E4%BC%A0%E6%97%A5%E6%9C%9F-yyyy-mm-dd-%E6%88%96%E5%85%B6%E4%BB%96%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%BC%E5%BC%8F/versions
http://tmpst-eh-files1.s3.amazonaws.com/sdpreview/0/1481850256-TNbIcV/preview.png
*/

(function() {
    'use strict';

    function getUploadDate() {
        let el = document.body.querySelector('player-microformat-renderer script');
        if (el) {
            let parts = el.textContent.split('"startDate":"',2);
            if (parts.length == 2) {
                return parts[1].split('"',1)[0];
            }
            parts = el.textContent.split('"uploadDate":"',2);
            if (parts.length == 2) {
                return parts[1].split('"',1)[0];
            }
        }

        return null;
    }

/* Проверка, является ли видео прямой трансляцией Check if the video is a live broadcast */
    function getIsLiveBroadcast() {
        let el = document.body.querySelector('player-microformat-renderer script');
        if (!el) {
            return null;
        }

        let parts = el.textContent.split('"isLiveBroadcast":',2);
        if (parts.length != 2) {
            return false;
        }

        let isLiveBroadcast = !!parts[1].split(',',1)[0];
        if (!isLiveBroadcast) {
            return false;
        }

        parts = el.textContent.split('"endDate":"',2);
        if (parts.length == 2) {
            return false;
        }

        return true;
    }

/* Извлечение идентификатора видео из URL-адреса Extract video id from the URL */
    function urlToVideoId(url) {
        let parts = url.split('/shorts/',2);
        if (parts.length === 2) {
            url = parts[1];
        } else {
            url = parts[0];
        }

        parts = url.split('v=',2);
        if (parts.length === 2) {
            url = parts[1];
        } else {
            url = parts[0];
        }

        return url.split('&',1)[0];
    }

/*
Получение даты загрузки из удалённого источника по идентификатору видео и передайте результат через обратный вызов.
Retrieve the upload date from a remote source using the video id and invoke the callback with the result
*/
    function getRemoteUploadDate(videoId, callback) {
        let body = {"context":{"client":{"clientName":"WEB","clientVersion":"2.20240416.01.00"}},"videoId":videoId};

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

/*
Преобразовать строку даты ISO в локализованную строку даты
Convert ISO date string to a localized date string
*/
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

/*
другой способ форматирования даты another way to format the date
let day = ("0" + date.getDate()).slice(-2);
let month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero based
let year = date.getFullYear();
return `${day}`;-${month}-${year} // returns date in 'yyyy-mm-dd' format
*/

}

/*
Обработка и обновление информации о дате загрузки видеоэлемента Process and update upload date info for a video element
@param {string} videoId - YouTube video ID
@param {HTMLElement} holder - DOM element that holds the date
@param {HTMLElement} container - Container with data-text attribute
@param {string} originalDateText - The original relative time text
*/
    function fetchAndUpdateUploadDate(videoId, holder, container, originalDateText) {
        getRemoteUploadDate(videoId, (uploadDate) => {
            const formattedDate = isoToDate(uploadDate);
            let displayText;
            const oldUploadRegex = /days?|weeks?|months?|years?|天|周|週|月|年/;
            if (!oldUploadRegex.test(originalDateText)) {
                // Keep original + formatted date for recent uploads
                displayText = `${originalDateText} · ${formattedDate}`;
            } else {
                // Show only absolute date
                displayText = formattedDate;
            }
            holder.firstChild.nodeValue = displayText;
            container.setAttribute('data-text', displayText);
        });
    }

/* Обновление даты загрузки и стиль отображения описаний видео на странице Update the upload date and display style of video descriptions on the page */
    function startTimers() {
/* Страница описания видео */
        setInterval(() => {
/* Получение даты загрузки Retrieve the upload date */
            let uploadDate = getUploadDate();
            if (!uploadDate) {
                return;
            }

/* Отформатировать дату и проверить, идет ли это прямая трансляция Format the date and check if it's a live broadcast */
            uploadDate = isoToDate(uploadDate);
            let isLiveBroadcast = getIsLiveBroadcast();

            if (isLiveBroadcast) {
                document.body.classList.add('ytud-description-live');
            } else {
                document.body.classList.remove('ytud-description-live');
            }

/* Обновить дату загрузки в описании видео Update the upload date in the video description */
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

/*
Более похожие интервалы для обновления дат загрузки в различных разделах страницы
список боковых панелей видеостраниц
More similar intervals for updating upload dates in various sections of the page
video page sidebar list
*/
        setInterval(() => {
            let vids = document.querySelectorAll('#items.ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');

                let holder;
                if (holders.length === 1) {
                    let copy = document.createElement('span');
                    copy.className = 'inline-metadata-item style-scope ytd-video-meta-block';
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[0].insertAdjacentElement('afterend', copy);
                    holder = copy;
                } else {
                    holder = holders[1];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text == dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.querySelector('a#thumbnail').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* Главная - Видео homepage list - videos */
        setInterval(() => {
            let vids = document.querySelectorAll('#content > ytd-rich-grid-media > #dismissible > #details > #meta > ytd-video-meta-block > #metadata');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');
                if (holders.length === 0) {
                    return;
                }

                let holder;
                if (holders.length === 1) {
                    let copy = document.createElement('span');
                    copy.className = 'inline-metadata-item style-scope ytd-video-meta-block';
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[0].insertAdjacentElement('afterend', copy);
                    holder = copy;
                } else {
                    holder = holders[1];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#meta').querySelector('h3 > a#video-title-link').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* Главная - shorts homepage list - shorts */
        setInterval(() => {
            let vids = document.querySelectorAll('#content > ytd-rich-grid-slim-media > #dismissible > #details > ytd-video-meta-block > #metadata');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');
                if (holders.length === 0) {
                    return;
                }
                let holder;
                if (holders.length === 1) {
                    let copy = document.createElement('span');
                    copy.className = 'inline-metadata-item style-scope ytd-video-meta-block';
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[0].insertAdjacentElement('afterend', copy);
                    holder = copy;
                } else {
                    holder = holders[1];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#details').querySelector('h3 > a').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* список поиска - видео search list - videos */
        setInterval(() => {
            let vids = document.querySelectorAll('#contents ytd-video-renderer #metadata');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');
                if (holders.length === 0) {
                    return;
                }
                let holder;
                if (holders.length === 1) {
                    let copy = document.createElement('span');
                    copy.className = 'inline-metadata-item style-scope ytd-video-meta-block';
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[0].insertAdjacentElement('afterend', copy);
                    holder = copy;
                } else {
                    holder = holders[1];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#dismissible').querySelector('a#thumbnail').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* список поиска - search list - shorts */
        setInterval(() => {
            let vids = document.querySelectorAll('#scroll-container > #items > ytd-reel-item-renderer > #dismissible > #details > ytd-video-meta-block > #metadata');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');
                if (holders.length === 0) {
                    return;
                }
                let holder;
                if (holders.length === 1) {
                    let copy = document.createElement('span');
                    copy.className = 'inline-metadata-item style-scope ytd-video-meta-block';
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[0].insertAdjacentElement('afterend', copy);
                    holder = copy;
                } else {
                    holder = holders[1];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#details').querySelector('h3 > a').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* список поиска - тема на боковой панели search list - topic in sidebar */
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
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.querySelector('a#thumbnail').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

 /* Понравившиеся Страница канала - главная (избранное видео) channel page - home (featured video) */
        setInterval(() => {
            let vids = document.querySelectorAll('#contents > ytd-channel-video-player-renderer > #content > #metadata-container > ytd-video-meta-block > #metadata');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');
                if (holders.length === 0) {
                    return;
                }

                let holder = holders[1];
                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#metadata-container').querySelector('yt-formatted-string > a').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* страница канала - главная (для ваших видео) channel page - home (for you videos) */
        setInterval(() => {
            let vids = document.querySelectorAll('#dismissible > #details > #text-metadata > #meta > #metadata-container > #metadata');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#metadata-line > span');
                if (holders.length === 0) {
                    return;
                }

                let holder;
                if (holders.length === 1) {
                    let copy = document.createElement('span');
                    copy.className = 'style-scope ytd-grid-video-renderer';
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[0].insertAdjacentElement('afterend', copy);
                    holder = copy;
                } else {
                    holder = holders[1];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#meta').querySelector('h3 > a#video-title').getAttribute('href');
                let videoId = urlToVideoId(link);
                fetchAndUpdateUploadDate(videoId, holder, el, dateText);
            })
        }, 1000);

/* Плейлист video playlist */
        setInterval(() => {
            let vids = document.querySelectorAll('#content > #container > #meta > ytd-video-meta-block > #metadata > #byline-container');
            if (vids.length === 0) {
                return;
            }

            vids.forEach((el) => {
                let holders = el.querySelectorAll('#video-info > span');
                if (holders.length <= 1) {
                    return;
                }

                let holder;
                let prefix = '';
                if (holders.length === 2) {
                    let copy = document.createElement('span');
                    copy.className = 'style-scope yt-formatted-string';
                    copy.setAttribute('dir', 'auto');
                    let textNode = document.createTextNode('');
                    copy.appendChild(textNode);
                    holders[1].insertAdjacentElement('afterend', copy);
                    holder = copy;
                    prefix = ' • ';
                } else {
                    holder = holders[2];
                }

                let dateText = holder.firstChild.nodeValue;
                let text = el.getAttribute('data-text');

                if (text !== null && text === dateText) {
                    return;
                }

                el.setAttribute('data-text', dateText);
                let link = el.closest('#meta').querySelector('h3 > a').getAttribute('href');
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

/*  */
/*  */
/*  */

