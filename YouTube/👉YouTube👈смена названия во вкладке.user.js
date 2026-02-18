// ==UserScript==
// @icon         https://github.com/SkyK0T/SkyTV/blob/main/skykotik.gif?raw=true
// @name         👉YouTube👈смена названия во вкладке
// @description 🧸YouTube🧸 изменение названия во вкладке
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
   // 🔷 Изменение заголовка
    function forceerTitel() {
        document.title = "ЮТ";
        setTimeout(forceerTitel, 1000); // Сбрасывать каждую секунду 1 000 мс=1 секунда
    }
    forceerTitel();

	})();
