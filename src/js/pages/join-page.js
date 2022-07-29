import Swiper, {Navigation, Pagination,} from 'swiper';
import styleSelect from "../libs/style-select";


export default () => {
  let selectAll = document.querySelectorAll('.select-menu');
  selectAll.forEach(item => {
    styleSelect(item);
  })

  Swiper.use([Navigation, Pagination]);

  //TEAM SWIPER
  const joinTeamSlider = document.querySelector('.join-team__slider')
  if (joinTeamSlider) {
    const teamSwiper = joinTeamSlider.querySelector('.swiper-container');
    const prev = joinTeamSlider.querySelector('.swiper-button-prev');
    const next = joinTeamSlider.querySelector('.swiper-button-next');

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

}