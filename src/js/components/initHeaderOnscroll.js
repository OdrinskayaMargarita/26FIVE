export default () => {

  let header = document.querySelector('header');
  header.classList.add('header--show')

  window.onscroll = function (e) {
    if (scrollY > 150) {
      if (this.oldScroll > this.scrollY) {
        header.classList.add('header--show')
      } else {
        header.classList.remove('header--show')
      }
      this.oldScroll = this.scrollY;
    }
  }
}