import Cursor from "./components/Cursor";
import initHeaderOnscroll from "./components/initHeaderOnscroll";
import validation from "./components/validation";
import modalTalk from "./components/modal-talk";
import initPlyr from "./components/initPlyr";

export default () => {
  const cursor = new Cursor();
  cursor.cursorOut()
  cursor.hoveredCursor()

  let year = document.getElementById('year');
  year ? year.innerHTML = (new Date()).getFullYear() : false

  initHeaderOnscroll()
  validation()
  modalTalk()
  initPlyr()

  let cookieAlert = document.querySelector('.cookie-apply')
  !(localStorage.getItem('cookie')) ? cookieAlert.classList.remove('cookie-apply--none') : false
  document.querySelector('.js-cookie').addEventListener('click', () => {
    localStorage.setItem('cookie', false);
    cookieAlert.classList.add('cookie-apply--none')
  })
}
