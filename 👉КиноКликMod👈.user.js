// ==UserScript==
// @icon         https://favicon.yandex.net/favicon/w1.zona.im
// @name         👉КиноКликMod👈
// @description  Добавляет на Кинопоиске кнопку бесплатного просмотра фильмов и сериалов,и ищет на популярных ресурсах/трекерах
// @author       4c5688 vbelevcev Mod
// @version      1.1
// @namespace
// @match        *://*.kinopoisk.ru/*
// @match        *://*.kinopoisk.ru/*
// @match        *://hd.kinopoisk.ru/*
// @match        *://ru.kinorium.com/*

// @match        https://*.kinorium.com/*/*
// @match        https://kino-teatr.ru/*/movie/*
// @match        https://www.kino-teatr.ru/*/movie/*//
// @match        *://*.imdb.com/title/*
//
// @match        *://www.themoviedb.org*/*
// @match        *://www.themoviedb.org/movie/*
// @match        *://www.themoviedb.org/tv/*
//
// @match        *://letterboxd.com/film/*
// @match        *://tapeop.dev/*

// @license      CC BY-SA
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js

/*
Это ссылки на оригинал, без моих изменений
 https://greasyfork.org/ru/scripts/558634-киноклик
 https://greasyfork.org/ru/users/1546943-4c5688
 https://greasyfork.org/ru/scripts/558634-%D0%BA%D0%B8%D0%BD%D0%BE%D0%BA%D0%BB%D0%B8%D0%BA
 Версия от 16.3.2026 г.
// ==/UserScript==
*/

(function() {
    'use strict';

    const SAFE_RESOURCES = [
{ title: "KinoBox.in", url: "http://kinobox.in/film/%id/", icon: "https://favicon.yandex.net/favicon/kinobox.in" },
{ title: "KinoBox web.app", url: "https://kinohost.web.app/movie/%id/", icon: "https://favicon.yandex.net/favicon/kinobox.tv" },

{ title: "Rutube", url: "https://rutube.ru/search/?query=%text %year", icon: "https://favicon.yandex.net/favicon/rutube.ru" },
{ title: "VKVideo", url: "https://vkvideo.ru/?q=%text %year", icon: "https://favicon.yandex.net/favicon/vkvideo.ru" },
{ title: "Яндекс Видео", url: "https://yandex.ru/video/search?text=%text", icon: "https://favicon.yandex.net/favicon/ya.ru" },
{ title: "Яндекс Дзен", url: "https://dzen.ru/search?query=%text", icon: "https://favicon.yandex.net/favicon/dzen.ru/" },
{ title: "YouTube", url: "https://www.youtube.com/results?search_query=%text %year", icon: "https://favicon.yandex.net/favicon/youtube.com" },

{ title: "Kino.Akseonowww", url: "https://kino.akseonowww.ru/#/%id/", icon: "https://favicon.yandex.net/favicon/kino.akseonowww.ru" },
{ title: "ReYoHoHo", url: "https://reyohoho.github.io/reyohoho/#/movie/%id/", icon: "https://favicon.yandex.net/favicon/reyohoho.github.io" },

{ title: "🎬 KinohubLive", url: "http://tv.kinohub.vip/film/%id/", icon: "https://favicon.yandex.net/favicon/kinobox.in" }, // @KinohubLive Чат: @KinohubChat

{ title: "Kinokosta kinosave@proton.me", url: "https://n1.kinokosta.shop/film/%id/", icon: "https://favicon.yandex.net/favicon/kinokosta.shop" },
{ title: "Kinopoisk.cfd", url: "https://www.kinopoisk.cfd/film/%id/", icon: "https://favicon.yandex.net/favicon/kinokosta.shop" },// www.kinopoisk.one

{ title: "Flcksbr Kinopoisk.Film", url: "http://www.kinopoisk.film/%id/", icon: "https://favicon.yandex.net/favicon/kinopoisk.film" },
{ title: "Flcksbr top SSpoisk", url: "http://flcksbr.top/film/%id/", icon: "https://favicon.yandex.net/favicon/kinopoisk.film" },
{ title: "Flcksbr xyz SSpoisk", url: "http://flcksbr.xyz/film/%id/", icon: "https://favicon.yandex.net/favicon/kinopoisk.film" }, // flcksbr.top


{ title: "Kinopoisk.gg iframe.cloud", url: "https://www.kinopoisk.gg/{type}/{id}-{translit}", icon: "https://favicon.yandex.net/favicon/iframe.cloud" },
{ title: "Zona New", url: "https://w1.zona.im/search/%text/#", icon: "https://favicon.yandex.net/favicon/w1.zona.im" },
{ title: "Zona", url: "https://w140.zona.plus/search/%text/#", icon: "https://favicon.yandex.net/favicon/w140.zona.plus" },
{ title: "🍿Kinoteatr.kg🍿", url: "https://kinoteatr.kg/search?q=%text", icon: "https://favicon.yandex.net/favicon/kinoteatr.kg" },
{ title: "Kinofree", url: "http://kinofree.su/search?key=%text", icon: "https://favicon.yandex.net/favicon/kinofree.su" },


{ title: "Filmix.my", url: "https://filmix.my/search/=%text", icon: "https://favicon.yandex.net/favicon/filmix.my" },
{ title: "HDRezka", url: "http://hdrezka-home.tv/search/?do=search&subaction=search&q=%text", icon: "https://favicon.yandex.net/favicon/hdrezka-home.tv" }, //hdrezka.co hdrezka.cm hdrezka.me
{ title: "LostFilm", url: "http://lostfilm.tv/search/?q=%text", icon: "https://favicon.yandex.net/favicon/lostfilm.tv" },
{ title: "SeasonVar", url: "http://seasonvar.ru/search?q=%text", icon: "https://favicon.yandex.net/favicon/seasonvar.ru" },

{ title: "Flixomo", url: "https://flixmomo.org/search?q=%text", icon: "https://favicon.yandex.net/favicon/flixmomo.org" },
{ title: "MyMail Video", url: "https://my.mail.ru/video/search?q=%text %year", icon: "https://favicon.yandex.net/favicon/my.mail.ru" },
{ title: "Kinokong", url: "https://kinokong.li/search?q=%text", icon: "https://favicon.yandex.net/favicon/kinokong.li" },
{ title: "GooDle", url: "https://www.google.com/search?q=%text %year", icon: "https://favicon.yandex.net/favicon/google.com" },

{ title: "Kinorium", url: "http://ru.kinorium.com/search/?q=%text", icon: "https://favicon.yandex.net/favicon/ru.kinorium.com" },
{ title: "IMDB", url: "http://imdb.com/find/?q=%text", icon: "https://favicon.yandex.net/favicon/imdb.com" },
{ title: "TeamHD.org", url: "https://teamhd.org/browse?search=%text&year=%YEAR", icon: "https://favicon.yandex.net/favicon/teamhd.org" },

{ title: "Traktorr (агрегатор торрентов)", url: "http://tragtorr.in/search/%text", icon: "https://favicon.yandex.net/favicon/tragtorr.in" },
{ title: "Rutracker Org", url: "https://rutracker.org/forum/tracker.php?nm=%text %year", icon: "https://favicon.yandex.net/favicon/rutracker.net" },
{ title: "Rutracker Net", url: "https://rutracker.net/forum/tracker.php?nm=%text %year", icon: "https://favicon.yandex.net/favicon/rutracker.net" },
{ title: "Rutor org", url: "https://rutor.org/search/0/0/100/0/%cleantext %year", icon: "https://favicon.yandex.net/favicon/rutor.org" }, // rutor.info/
{ title: "Rutor is", url: "https://rutor.is/search/0/0/100/0/", icon: "https://favicon.yandex.net/favicon/rutor.org" },
{ title: "Kinozal", url: "https://kinozal.tv/browse.php?s=%text&d=%year", icon: "https://favicon.yandex.net/favicon/kinozal.tv" },
{ title: "NNMClub", url: "https://nnmclub.to/forum/tracker.php?nm=%text %year", icon: "https://favicon.yandex.net/favicon/nnmclub.to" }, // https://nnm-club.me/
{ title: "The Pirate Bay", url: "https://thepiratebay.org/search.php?q=%engcleantext %year", icon: "https://favicon.yandex.net/favicon/thepiratebay.org" },
{ title: "bluebird-hd", url: "http://bluebird-hd.org/browse.php?search=%text", icon: "https://favicon.yandex.net/favicon/bluebird-hd.org" },
{ title: "Searchtor", url: "https://searchtor.to/r/%text", icon: "https://favicon.yandex.net/favicon/searchtor.to" },
{ title: "Торрент-искатель", url: "https://torrentseeker.com/search.php?q=%text", icon: "https://favicon.yandex.net/favicon/torrentseeker.com" },
{ title: "Nyaa", url: "https://nyaa.land/?f=0&c=0_0&q=%text", icon: "https://favicon.yandex.net/favicon/nyaa.land" },

/*

{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
*/
];

    const QUERY_DATA = {};

    function cleanQuery(str, lang='ru') {
        if(!str) return "";
        const stop = lang==='ru' ? ["в","во","на","по","и","с","со","к","ко","за","из","у","для","от","до","о","об","а"] : [];
        const regex = lang==='ru' ? /[^а-яё0-9\s]/gi : /[^a-z0-9\s]/gi;
        return str.toLowerCase()
                  .replace(regex," ")
                  .split(/\s+/)
                  .filter(w => w.length>2 && !stop.includes(w))
                  .join(" ");
    }

    function querystring(str) {
        return str.replace(/%(\w+)/g, (_,w) => QUERY_DATA[w.toLowerCase()] ? encodeURIComponent(QUERY_DATA[w.toLowerCase()]) : _ );
    }

    function extractQueryData() {
        const h1 = document.querySelector('h1[itemprop="name"]');
        if(!h1) return;

        const titleSpan = h1.querySelector('span');
        const titleText = titleSpan ? titleSpan.textContent.trim() : '';

        const origSpan = document.querySelector('span[class*="OriginalTitle"], span[class*="originalTitle"]');
        const engTitle = origSpan && origSpan.textContent.trim() ? origSpan.textContent.trim() : titleText;

        const yearMatch = titleText.match(/\((\d{4})\)/);
        const year = yearMatch ? yearMatch[1] : '';

        const idMatch = location.pathname.match(/\/(film|series)\/(\d+)/);
        const id = idMatch ? idMatch[2] : '';

        QUERY_DATA.text = titleText.replace(/\(\d{4}\)/, '').trim();
        QUERY_DATA.engtext = engTitle;
        QUERY_DATA.year = year;
        QUERY_DATA.id = id;
        QUERY_DATA.cleantext = cleanQuery(QUERY_DATA.text, 'ru');
        QUERY_DATA.engcleantext = cleanQuery(QUERY_DATA.engtext, 'en');
    }

    const style=document.createElement('style');
    style.textContent=`
        button.kinopoisk-watch-online-button,
        .styles_subscriptionOffer__eau7V,
        .styles_root__J2PUZ,
        .styles_hdMetaTableContainer__coI3m,
        .styles_watchingServices__EeMSa,
        .styles_plusBadgeCounter__ztZqV,
        .style_root__UUsUH.style_container__gsfKM { display:none!important; }

        .kp-alt-wrapper { margin-top:6px; position:relative; display:inline-block; width:100%; }
        .kp-alt-body {
            position:absolute;
            top:calc(100% + 6px);
            left:0;
            transform-origin:top;
            transform:scaleY(0);
            border-radius:10px;
            padding:10px;
            display:flex;
            flex-direction:column;
            box-shadow:0 4px 12px rgba(0,0,0,.15);
            transition: transform .25s ease;
            z-index:100;
            background:rgba(255,255,255,0.98);
            width: max-content;
            min-width:200px;
        }
        .kp-alt-body.open { transform:scaleY(1); }

        .kp-row {
            display:flex;
            align-items:center;
            gap:10px;
            padding:8px 12px;
            border-radius:8px;
            cursor:pointer;
            transition:background .2s, transform .15s;
        }
        .kp-row:hover { background:rgba(0,0,0,0.08); transform:scale(1.03); }
        .kp-row a { color:inherit!important; text-decoration:none; font-size:16px; font-weight:500; }
    `;
    document.head.appendChild(style);

    let lastUrl = location.href;

    const observer = new MutationObserver(()=>{
        const urlChanged = location.href !== lastUrl;
        if(urlChanged) { lastUrl = location.href; extractQueryData(); }

        let watchBtn = document.getElementById("rk-watch-btn");
        if(!watchBtn){
            const originalBtn = document.querySelector("button[title='Буду смотреть']");
            const buttonRoot = originalBtn?.closest("div");

            if(originalBtn && buttonRoot?.parentElement && QUERY_DATA.id){
                const wrapper=document.createElement("div");
                wrapper.className="kp-alt-wrapper";

                const newBtn=document.createElement("button");
                newBtn.id="rk-watch-btn";
                newBtn.textContent="Просмотр";
                newBtn.className="style_button__Awsrq style_buttonSize52__MBeHC style_buttonPrimary__Qn_9l";

                const body=document.createElement("div");
                body.className="kp-alt-body";

                SAFE_RESOURCES.forEach(site=>{
                    const row=document.createElement("div");
                    row.className="kp-row";
                    row.innerHTML=`<img src="${site.icon}" width="20" height="20"><a href="${querystring(site.url)}" target="_blank">${site.title}</a>`;
                    body.appendChild(row);
                });

                newBtn.onclick = (e)=>{
                    e.stopPropagation();
                    body.classList.toggle("open");
                };

                document.addEventListener("click", e=>{
                    if(!wrapper.contains(e.target)){
                        body.classList.remove("open");
                    }
                });

                wrapper.appendChild(newBtn);
                wrapper.appendChild(body);
                buttonRoot.parentElement.insertBefore(wrapper, buttonRoot.nextSibling);
            }
        }
    });

    observer.observe(document.body,{childList:true,subtree:true});
    extractQueryData();
})();
