// ==UserScript==
// @icon         https://img.icons8.com/ios-filled/64/000000/picture-in-picture.png
// @name:ru      👉Авто-режим картинка в картинке при смене вкладки на всех сайтах👈
// @name         Auto Picture-in-Picture on Tab Change
// @namespace    https://github.com/EzioTheGoat/EzioUserscripts
// @version      1.3.1
// @description:ru  Автоматически включает функцию PiP для воспроизведения видео в браузерах Chromium при переключении вкладок. Для разблокировки требуется первый щелчок мыши, и при возврате она отключается..
// @description  Auto-enables PiP for playing videos in Chromium browsers on tab switch. Requires an initial click to unlock and exits on return.
// @author       Ezio Auditore
//
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/EzioTheGoat/EzioUserscripts/main/Auto-PiP-Tab-Switch.user.js
// @downloadURL  https://raw.githubusercontent.com/EzioTheGoat/EzioUserscripts/main/Auto-PiP-Tab-Switch.user.js
// ==/UserScript==

(function () {
  "use strict";

  /**
   * Автоматическое переключение в браузерах Chromium при смене вкладки.
   *
   * Скрипт ожидает первого щелчка пользователя, чтобы "разблокировать" функцию автоматического переключения,
   * выполнение требования к жестам пользователя, предъявляемого браузерами. Когда страница теряет фокус,
   * при активном воспроизведении видео скрипт запрашивает режим Картинка в картинке.
   * При восстановлении фокуса он выходит из режима Картинка в картинке.
   *
   * Примечание: Режим PiP не будет активирован, если видео приостановлено.
   *
   * Auto PiP for Chromium browsers on tab change.
   *
   * The script waits for an initial user click to "unlock" the auto-PiP feature,
   * satisfying the user gesture requirement enforced by browsers. When the page loses focus,
   * if there is an actively playing video, the script requests Picture-in-Picture mode.
   * On regaining focus, it exits Picture-in-Picture mode.
   *
   * Note: PiP mode will not be activated if the video is paused.
   */
// Флажок, указывающий на то, что функция auto-PiP была разблокирована жестом пользователя
// Flag to indicate that auto-PiP has been unlocked by a user gesture
  let unlocked = false;

  /**
   * Разблокирует автоматический просмотр после первого щелчка пользователя.
   * Unlocks auto-PiP after the first user click.
   */
  function unlockPiP() {
    unlocked = true;
    document.removeEventListener("click", unlockPiP);
    console.log("Auto-PiP unlocked by user interaction.");
  }
  document.addEventListener("click", unlockPiP);

  /**
   * Возвращает первый доступный видеоэлемент, который активно воспроизводится.
   * @возвращает {HTMLVideoElement|null} Активный видеоэлемент или null, если он не найден.
   *
   * Returns the first available video element that is actively playing.
   * @returns {HTMLVideoElement|null} The active video element or null if none found.
   */
  function getActiveVideo() {
    const videos = document.querySelectorAll("video");
    for (const video of videos) {
      if (!video.paused && !video.ended) {
        return video;
      }
    }
    return videos.length ? videos[0] : null;
  }

  /**
   * Переходит в режим "Картинка в картинке", если найдено активное (воспроизводимое) видео.
   * Enters Picture-in-Picture mode if an active (playing) video is found.
   */
  async function enterPiP() {
    if (!unlocked) {
      console.log(
        "Функция Auto-PiP заблокирована. Пожалуйста, нажмите в любом месте страницы, чтобы включить ее."
      );
      return;
    }
    try {
      const video = getActiveVideo();
      // Вводите PiP только в том случае, если видео существует и оно воспроизводится
      // Only enter PiP if a video exists and it is playing
      if (
        video &&
        !video.paused &&
        document.pictureInPictureElement !== video
      ) {
        await video.requestPictureInPicture();
        console.log("Entered Picture-in-Picture mode.");
      } else {
        console.log("No active (playing) video available for PiP.");
      }
    } catch (error) {
      console.error("Error entering Picture-in-Picture mode:", error);
    }
  }

  /**
   * Exits Picture-in-Picture mode if active.
   */
  async function exitPiP() {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        console.log("Exited Picture-in-Picture mode.");
      }
    } catch (error) {
      console.error("Error exiting Picture-in-Picture mode:", error);
    }
  }

  /**
   * Helper function to delay the execution of an action.
   * @param {Function} action - The action to perform after the delay.
   * @param {number} delay - The delay in milliseconds.
   */
  function delayedAction(action, delay = 100) {
    setTimeout(action, delay);
  }

// Прослушиватели событий для отображения событий фокусировки и размытия вкладок для запуска изменений режима PiP.
// Event listeners for tab focus and blur events to trigger PiP mode changes.
  window.addEventListener("blur", () => {
    delayedAction(enterPiP);
  });

  window.addEventListener("focus", () => {
    delayedAction(exitPiP);
  });

// Дополнительная обработка изменений видимости для более надежного поведения.
// Additional visibility change handling for more robust behavior.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      delayedAction(enterPiP);
    } else if (document.visibilityState === "visible") {
      delayedAction(exitPiP);
    }
  });
})();
