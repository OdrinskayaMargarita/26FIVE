import Plyr from 'plyr';

export default () => {
  const controls = `
        <div class="plyr__controls">
            <a href="javascript:void(0)" class="plyr__control js-plyr-mute js-hovered mute hovered" aria-label="Play, {title}" data-plyr="play">
                <svg class="icon-mute" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g><g><path fill="#181818" d="M14.25 7.914L11.057 4.72l3.193-3.193zm0 3.896L28 25.56l-1.94 1.94-3.117-3.132c-1.62 1.314-3.53 2.292-5.637 2.765v-3.147c1.268-.382 2.413-1.008 3.437-1.803L14.25 15.69v10.282l-7.639-7.639H.5V9.167h7.226L.5 1.94 2.44 0zm10.694 1.94c0-4.843-3.223-8.937-7.638-10.251V.35C23.432 1.741 28 7.211 28 13.75a13.44 13.44 0 0 1-1.574 6.34l-2.307-2.307c.52-1.252.825-2.597.825-4.033zm-3.819 0c0 .336-.03.657-.076.963l-3.743-3.744V7.593c2.26 1.13 3.819 3.453 3.819 6.157z"/></g></g></svg>
                <svg class="icon-sound" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g><g><path d="M17.306 3.85c4.415 1.314 7.638 5.408 7.638 10.251 0 4.843-3.223 8.938-7.638 10.251V27.5C23.432 26.11 28 20.64 28 14.1 28 7.562 23.432 2.093 17.306.702zM21.125 14.1c0-2.704-1.558-5.026-3.82-6.157v12.299a6.835 6.835 0 0 0 3.82-6.142zM.5 9.518v9.166h6.111l7.639 7.64V1.878L6.611 9.518z"/></g></g></svg>
            </a>
        </div>
    `;

  const elements = [...document.querySelectorAll('.js-player:not(.js-why-us-player)')];
  if (elements && elements.length) {
    elements.forEach(p => {
      const player = new Plyr(p, {
        vimeo: {
          controls: false,
          loop: true,
          muted: true,
        },
        muted: true,
        clickToPlay: true,
        autoplay: true,
        controls: controls,
        loop: {
          active: true
        },
        hideControls: false,
        fullscreen: {
          enabled: false
        }
      })

      player.play()
      player.muted = true

      let muteButton = document.querySelector('.js-plyr-mute')
      if (muteButton) {
        muteButton.addEventListener('click', () => {
          if (muteButton.classList.contains('mute')) {
            player.muted = false;
            player.play()
            muteButton.classList.remove('mute')
          } else {
            player.muted = true;
            player.play()
            muteButton.classList.add('mute')
          }
        })
      }
    });
  }
}
