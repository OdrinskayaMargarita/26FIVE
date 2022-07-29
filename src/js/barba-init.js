import barba from '@barba/core';
import pageTransition from './components/page-transitions';
import commonScripts from './common';
import Cursor from "./components/Cursor";

//pages
import homePage from "./pages/home-page";
import aboutPage from "./pages/about-page";
import teamPage from "./pages/team-page";
import workPage from "./pages/work-page";
import joinPage from "./pages/join-page";
import solutionPage from "./pages/solution-page";
import consultingPage from "./pages/consulting-page";

//header
import Header from "./components/Header";
import initPlyr from "./components/initPlyr";

/**
 * Barba initial script. Details see on link.
 * @see https://wiki.bsgdigital.com/ru/onboarding/developer/front-end/template/barba
 */
export default function () {
  /**
   * Duration of page transition IN and page transition OUT
   * @constant
   * @type { number } - miliseconds
   */
  const PAGE_IN_DUR = 1000;
  const PAGE_OUT_DUR = 500;

  barba.init({
    debug: true, /** Set to false, when deploy to production */
    sync: true,
    prevent: ({el}) => !!el.closest('#wpadminbar'), /** Fix for WP */
    transitions: [{
      /** Fire scripts when page leave */
      async leave(data) {
        const done = this.async();

        /** Run page out animation */
        pageTransition(true, PAGE_OUT_DUR);

        /** Scroll window to the top */
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });

        // Write here other scripts before page leave

        await delay(PAGE_OUT_DUR);
        done();
      },
      /** Fire scripts once on page load */
      once() {
        const header = new Header();
        header.init();

        commonScripts();
        const cursor = new Cursor();
        cursor.bindCursor();
        cursor.hoveredCursor()
      },
      beforeEnter(data) {
        let namespace = data.next.namespace;
        document.body.dataset.pageName = namespace;
      },
      /** Fire scripts after page enter */
      async after(data) {
        const done = this.async();

        /** Run page in animation */
        pageTransition(false, PAGE_IN_DUR);

        await delay(PAGE_IN_DUR);
        done();

        /** Run other scripts after pageIn transition complete */
        commonScripts();
      },
    }],
    /** Run scripts for each separate page after page load */
    views: [
      {
        namespace: 'homePage',
        afterEnter: () => {
          homePage()
        }
      },
      {
        namespace: 'teamPage',
        afterEnter: () => {
          teamPage()
        }
      },
      {
        namespace: 'solutionPage',
        afterEnter: () => {
          solutionPage()
        }
      },
      {
        namespace: 'consultingPage',
        afterEnter: () => {
          consultingPage()
        }
      },
      {
        namespace: 'workPage',
        afterEnter: () => {
          workPage()
        }
      },
      {
        namespace: 'joinPage',
        afterEnter: () => {
          joinPage()
        }
      },
      {
        namespace: 'aboutPage',
        afterEnter: () => {
          aboutPage()
          const cursor = new Cursor();
          cursor.bindCursor();
          cursor.hoveredCursor()
          initPlyr()
        }
      },
      {
        namespace: 'contactPage',
        afterEnter: () => {
          document.querySelector('header').classList.add('header--black')
        }
      }
    ]
  })

  /**
   * Set delay during page transition that equals to page transition duration.
   * @param { number } [n=2000] - Time in miliseconds of transition duration.
   */
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

}