export default class {
  constructor() {
    this.header = document.querySelector('header');
    this.burger = document.querySelector('.js_burger');
    this.html = document.querySelector('html');
  }

  // mobile menu control
  init() {
    this.toggleOpenMenu()
  }

  toggleOpenMenu() {
    this.burger.addEventListener('click', (e) => {
      if (this.header.classList.contains('header--opened')) {
        e.preventDefault();
        this.html.classList.remove('no-scroll');
        this.header.classList.remove('header--opened');
      } else {
        e.preventDefault();
        document.querySelector('header').classList.remove('header--black')
        this.html.classList.add('no-scroll');
        this.header.classList.add('header--opened')
      }
    });
  }

}
