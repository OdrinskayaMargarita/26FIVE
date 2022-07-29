import styleSelect from "../libs/style-select"
import {translate} from "autoprefixer/lib/hacks/grid-utils";


export default () => {
  let allDropdown = document.querySelectorAll('.work-one__dropdown__title')

  allDropdown.forEach((dropwdownLink) => {
    dropwdownLink.addEventListener('click', () => {
      if (dropwdownLink.closest('.work-one__dropdown').classList.contains('work-one__dropdown--open')) {
        dropwdownLink.closest('.work-one__dropdown').classList.remove('work-one__dropdown--open')
      } else {
        dropwdownLink.closest('.work-one__dropdown').classList.add('work-one__dropdown--open')
      }
    })
  })

  let selectAll = document.querySelectorAll('.select-menu');
  selectAll.forEach(item => {
    styleSelect(item);
  })

  let ssDropdown = document.querySelectorAll('.ss-dropdown')
  let widthFull = document.documentElement.clientWidth;
  ssDropdown.forEach(item => {
    if (widthFull <= 600) {
      item.style.width = widthFull + 2 + 'px';
      item.style.left = -Math.ceil(item.getBoundingClientRect().left) + 'px'
    }
  })


  let allLink = document.querySelectorAll('.work-one__dropdown--link')
  let workModal = document.querySelector('.work-modal')
  let html = document.querySelector('html')
  let header = document.querySelector('header')
  allLink.forEach((dropwdownLinkModal) => {
    dropwdownLinkModal.addEventListener('click', () => {
      workModal.classList.add('work-modal--open')
      html.classList.add('no-scroll')
      header.classList.add('header--show')
    })
  })


  let workModalClose = document.querySelectorAll('.work-modal--close')
  workModalClose.forEach((workModalCloseItem) => {
    workModalCloseItem.addEventListener('click', () => {
      workModal.classList.remove('work-modal--open')
      html.classList.remove('no-scroll')
      header.classList.remove('header--show')
    })
  })
}
