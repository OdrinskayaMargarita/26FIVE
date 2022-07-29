import {gsap} from "gsap";

/**
 * Page transition effects.
 * @see https://wiki.bsgdigital.com/ru/onboarding/developer/front-end/template/barba#componentspage-transitionsjs
 * @param { boolean } out - false for pageIn animtion, true for page out
 * @param { number } duration - use this number of miliseconds for your transition effects
 */
export default (out, duration) => {

  out ? pageOut() : pageIn();

  function pageOut() {
    // Write your transition OUT effect here
    let wrapper = document.querySelector('.page-transition');
    let header = document.querySelector('header');
    let html = document.querySelector('html');

    html.classList.remove('no-scroll');
    header.classList.remove('header--opened');

    wrapper.classList.remove('page-transition--hidden')
    wrapper.classList.remove('page-transition--hidden-z')
  }

  function pageIn() {
    // Write your transition IN effect here
    let wrapper = document.querySelector('.page-transition');
    // wrapper.classList.add('page-transition--hidden')

    function hidden() {
      wrapper.classList.add('page-transition--hidden')
    }
    setTimeout(hidden, 500);

    function hiddenZ() {
      wrapper.classList.add('page-transition--hidden-z')
    }
    setTimeout(hiddenZ, 550);
  }
}

