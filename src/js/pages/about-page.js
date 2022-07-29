import Swiper, {Navigation, Pagination,} from 'swiper';


export default () => {
  Swiper.use([Navigation, Pagination]);


  //REVIEW SWIPER
  const reviewSlider = document.querySelector('.js-review-slider');
  if (reviewSlider) {
    const reviewSwiper = reviewSlider.querySelector('.js-swiper-container');
    const pagination = reviewSlider.querySelector('.js-swiper-pagination');

    let swiperReview = new Swiper(reviewSwiper, {
      slidesPerView: 1,
      speed: 500,
      pagination: {
        el: pagination,
        clickable: true,
      },
    });
  }


  //TEAM SWIPER
  const teamSlider = document.querySelector('.js-about-team-slider');
  if (reviewSlider) {
    const teamSwiper = teamSlider.querySelector('.js-swiper-container');
    const prev = teamSlider.querySelector('.js-swiper-button-prev');
    const next = teamSlider.querySelector('.js-swiper-button-next');

    let swiperTeam = new Swiper(teamSwiper, {
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 50,
      loop: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  }

  //INSTAGRAM SLIDER
  const instaSlider = document.querySelector('.js-insta-slider');
  if (reviewSlider) {
    const instaSwiper = instaSlider.querySelector('.js-swiper-container');

    let swiperInsta = new Swiper(instaSwiper, {
      slidesPerView: 1.1,
      speed: 500,
      spaceBetween: 25,
      autoplay: true,
      breakpoints: {
        768: {
          slidesPerView: 3.37,
          autoplay: false,
        },
        600: {
          slidesPerView: 2,
        }
      }
    });
  }


  //CLIENTS SWIPER
  const clients = document.querySelector('.js-clients__wrapper');
  const clientsSwiper = clients.querySelector('.js-swiper-container');
  const pagination = clients.querySelector('.js-swiper-pagination');
  let swiper;
  let swiperInit = () => {
    swiper = new Swiper(clientsSwiper, {
      slidesPerView: 2,
      slidesPerColumn: 5,
      grid: {
        rows: 5,
      },
      speed: 500,
      pagination: {
        el: pagination,
        clickable: true,
      },
    });
  }
  let swiperToggle = windowWidth => {
    if (clients) {
      if (windowWidth < 768 && !swiper) {
        swiperInit()
      } else if (windowWidth >= 768 && swiper) {
        swiper.destroy()
        swiper = null;
      }
    }
  }
  let intElemClientWidth = document.documentElement.clientWidth;
  swiperToggle(intElemClientWidth)
  window.addEventListener("resize", function () {
    let intElemClientWidth = document.documentElement.clientWidth;
    swiperToggle(intElemClientWidth)
  });
}