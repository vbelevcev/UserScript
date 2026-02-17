// ==UserScript==
// @icon         https://favicon.yandex.net/favicon/w1.zona.im
// @name         👉КиноКликMod👈
// @description  Добавляет кнопки для просмотра и поиска на популярных трекерах фильмов и сериалов
// @author       vbelevcev Mod

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


// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @namespace
// Это ссылки на оригинал, без моих изменений
// https://greasyfork.org/ru/scripts/558634-киноклик
// https://greasyfork.org/ru/users/1546943-4c5688
// https://greasyfork.org/ru/scripts/558634-%D0%BA%D0%B8%D0%BD%D0%BE%D0%BA%D0%BB%D0%B8%D0%BA
// Версия от 11 дек. 2025 г.
// ==/UserScript==

(function() {
'use strict';

const SAFE_RESOURCES = [
{ title: "Rutube", url: "https://rutube.ru/search/?query=%text %year", icon: "https://favicon.yandex.net/favicon/rutube.ru" },
{ title: "VKVideo", url: "https://vkvideo.ru/?q=%text %year", icon: "https://favicon.yandex.net/favicon/vkvideo.ru" },
{ title: "Яндекс Видео", url: "https://yandex.ru/video/search?text=%text", icon: "https://favicon.yandex.net/favicon/ya.ru" },
{ title: "Яндекс Дзен", url: "https://dzen.ru/search?query=%text", icon: "https://favicon.yandex.net/favicon/dzen.ru/" },
{ title: "YouTube", url: "https://www.youtube.com/results?search_query=%text %year", icon: "https://favicon.yandex.net/favicon/youtube.com" },

{ title: "Kino.Akseonowww", url: "https://kino.akseonowww.ru/#/%id/", icon: "https://favicon.yandex.net/favicon/kino.akseonowww.ru" },
{ title: "ReYoHoHo", url: "https://reyohoho.github.io/reyohoho/#/movie/%id/", icon: "https://favicon.yandex.net/favicon/reyohoho.github.io" },

{ title: "🎬 KinohubLive", url: "http://tv.kinohub.vip/film/%id/", icon: "https://favicon.yandex.net/favicon/kinobox.in" }, // @KinohubLive Чат: @KinohubChat
{ title: "KinoBox", url: "http://kinobox.in/film/%id/", icon: "https://favicon.yandex.net/favicon/kinobox.in" },

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

{ title: "Kinobox", url: "https://kinohost.web.app/movie/%id/", icon: "https://favicon.yandex.net/favicon/kinobox.tv" },
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
/*

{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },
{ title: "", url: "", icon: "https://favicon.yandex.net/favicon/" },






*/
];

const QUERY_DATA = {};
const REYO = "https://reyohoho.github.io/reyohoho/#";
// Зеркала https://reyohoho-gitlab.vercel.app/#
//🔹Новый фронтенд (Vue 3):
// reyohoho.gitlab.io/reyohoho
// reyohoho-vue.vercel.app
// reyohoho.onrender.com
//🔹 reyohoho.serv00.net
// Старый фронтенд:
// reyohoho.vercel.app
// reyohoho.surge.sh

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
        try {
            const script = document.querySelector('#__NEXT_DATA__');
            const { props, query } = JSON.parse(script.textContent);
            const data = props.apolloState.data;
            const id = query.id;
            const item = data[`TvSeries:${id}`] || data[`Film:${id}`];
            const yr = Array.isArray(item.releaseYears) ? item.releaseYears[0] : item.productionYear;
            const year = typeof yr==="object" ? yr.start : yr;

            QUERY_DATA.text = item.title.russian;
            QUERY_DATA.engtext = item.title.original || item.title.russian;
            QUERY_DATA.year = year;
            QUERY_DATA.id = id;
            QUERY_DATA.cleantext = cleanQuery(QUERY_DATA.text, 'ru');
            QUERY_DATA.engcleantext = cleanQuery(QUERY_DATA.engtext, 'en');
        } catch{}
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
        .kp-alt-wrapper { margin-top:8px; position:relative; display:inline-block; justify-content:center; }
        .kp-alt-btn { cursor:pointer; padding:6px 12px; border-radius:9999px; font-weight:550; display:flex; align-items:center; gap:6px; transition:background .2s, transform .15s; }
        .kp-alt-btn:hover { background:rgba(0,0,0,0.08); transform:scale(1.05); }
        .kp-alt-arrow { transition: transform .25s ease; }
        .kp-alt-body { position:absolute; top:calc(100% + 6px); left:0; transform-origin:top; transform:scaleY(0); border-radius:10px; padding:10px; display:flex; flex-direction:column; box-shadow:0 4px 12px rgba(0,0,0,.15); transition: transform .25s ease; z-index:100; }
        .kp-alt-body.open { transform:scaleY(1); }
        .kp-row { display:flex; align-items:center; gap:10px; padding:8px 12px; border-radius:8px; cursor:pointer; transition:background .2s, transform .15s; }
        .kp-row:hover { background:rgba(0,0,0,0.08); transform:scale(1.03); }
        .kp-row a { color:inherit!important; text-decoration:none; font-size:16px; font-weight:500; }
    `;
    document.head.appendChild(style);


    let lastUrl = location.href;

    let lastId = location.pathname.match(/\/(film|series)\/(\d+)/)?.[2] || null;
    setInterval(() => {
        const newId = location.pathname.match(/\/(film|series)\/(\d+)/)?.[2] || null;
        if (newId && lastId && newId !== lastId) {
            lastId = newId;
            location.reload();
        }
    }, 300);


    const observer = new MutationObserver(()=>{
        const urlChanged = location.href !== lastUrl;
        if(urlChanged) { lastUrl = location.href; extractQueryData(); }

        let watchBtn = document.getElementById("rk-watch-btn");
        if(!watchBtn){
            const originalBtn = document.querySelector("button[title='Буду смотреть']");
            const buttonRoot = originalBtn?.closest(".style_root__1_tXA");
            const id = location.pathname.match(/\/(film|series)\/(\d+)/)?.[2];
            if(originalBtn && buttonRoot?.parentElement && id){
                const newBtn=document.createElement("button");
                newBtn.id="rk-watch-btn";
                newBtn.textContent="Поиск на Reyohoho";
                newBtn.title="Смотреть";
                newBtn.setAttribute("aria-pressed","false");
                newBtn.className="style_button__Awsrq style_buttonSize52__MBeHC style_buttonPrimary__Qn_9l";
                if(originalBtn.classList.contains("style_buttonLight__C8cK7")) newBtn.classList.add("style_buttonLight__C8cK7");
                if(originalBtn.classList.contains("style_buttonDark__pBW5l")) newBtn.classList.add("style_buttonDark__pBW5l");
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                newBtn.onclick = () => {
                    const url = REYO+id;
                    if(isSafari) window.open(url,"_blank");
                    else { const w=720,h=720,left=(screen.width-w)/2,top=(screen.height-h)/2; window.open(url,"reyohoho_player",`width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,popup=yes`); }
                };
                const wrapper=document.createElement("div");
                wrapper.className=buttonRoot.parentElement.className;
                wrapper.appendChild(newBtn);
                buttonRoot.parentElement.before(wrapper);
                watchBtn = newBtn;
            }
        }


        if(watchBtn && QUERY_DATA.text && !document.querySelector(".kp-alt-wrapper")){
            const wrapper=document.createElement("div");
            wrapper.className="kp-alt-wrapper";
            wrapper.style.display="flex"; wrapper.style.justifyContent="center"; wrapper.style.marginTop="6px";

            const altBtn=document.createElement("div");
            altBtn.className="kp-alt-btn";

            const btnStyle = getComputedStyle(watchBtn);
            altBtn.style.background = btnStyle.backgroundColor;
            altBtn.style.color = watchBtn.classList.contains("style_buttonDark__pBW5l") ? "#fff" : "#111";
            altBtn.innerHTML=`<span>Другие источники</span><span class="kp-alt-arrow">▶</span>`;

            const body=document.createElement("div");
            body.className="kp-alt-body";
            body.style.backgroundColor = watchBtn.classList.contains("style_buttonDark__pBW5l") ? btnStyle.backgroundColor : "rgba(255,255,255,0.98)";
            body.style.color = watchBtn.classList.contains("style_buttonDark__pBW5l") ? "#fff" : "#111";

            SAFE_RESOURCES.forEach(site=>{
                const row=document.createElement("div");
                row.className="kp-row";
                row.innerHTML=`<img src="${site.icon}" width="20" height="20"><a href="${querystring(site.url)}" target="_blank">${site.title}</a>`;
                body.appendChild(row);
            });

            altBtn.onmouseenter=()=>altBtn.style.background="rgba(0,0,0,0.08)";
            altBtn.onmouseleave=()=>altBtn.style.background=btnStyle.backgroundColor;
            altBtn.onclick=e=>{
                e.stopPropagation();
                body.classList.toggle("open");
                altBtn.querySelector(".kp-alt-arrow").style.transform = body.classList.contains("open") ? "rotate(90deg)" : "rotate(0)";
            };

            document.addEventListener("click", e=>{
                if(!wrapper.contains(e.target)){
                    body.classList.remove("open");
                    altBtn.querySelector(".kp-alt-arrow").style.transform = "rotate(0)";
                }
            });

            wrapper.appendChild(altBtn);
            wrapper.appendChild(body);
            const resize = ()=>body.style.minWidth = watchBtn.offsetWidth + "px";
            resize(); window.addEventListener("resize", resize);
            watchBtn.insertAdjacentElement("afterend", wrapper);
        }
    });

    observer.observe(document.body,{childList:true,subtree:true});
    extractQueryData();
})();