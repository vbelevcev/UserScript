// ==UserScript==
// @icon         https://github.com/SkyK0T/SkyTV/blob/main/skykotik.gif?raw=true
// @name         👉YouTube👈смена иконки во вкладке
// @description 👉YouTube👈изменение иконки во вкладке
// @match        https://www.youtube.com/*
// @author       Да
// ==/UserScript==
/*
@version      1
Скрипт https://greasyfork.org/ru/scripts/530446-youtube-titel-en-favicon-changer
Автор https://greasyfork.org/ru/users/1447313-lowie-theuwis
Статейки https://habr.com/ru/companies/htmlacademy/articles/578224/
Иконки  https://icon-icons.com/ru/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8/youtube+.ico
*/
(function() {
    'use strict';
/**/
    // 🔷 Изменение иконки
    function vervangFavicon() {
        const newFaviconUrl = 'https://images.icon-icons.com/647/PNG/512/youtube_social_media_online_icon-icons.com_59674.png'; // URL-адрес иконки. Здесь вы можете использовать другой URL-адрес https://smartschool.be/favicon.ico
        const oldIcons = document.querySelectorAll('link[rel*="icon"]');
        oldIcons.forEach(icon => icon.remove());

        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = newFaviconUrl;
        document.head.appendChild(favicon);
    }
    vervangFavicon();
    setInterval(vervangFavicon, 5000); // Заменять каждые 5 секунд (в целях безопасности)
})();