export default () => {
  let openModalTalk = document.querySelector('.js_popup-talk')
  let modalTalk = document.querySelector('.modal-talk')
  let closeModalTalk = document.querySelector('.modal-talk__close')

  openModalTalk.addEventListener('click', () => {
    modalTalk.classList.add('modal-talk--open')
  })

  closeModalTalk.addEventListener('click', () => {
    modalTalk.classList.remove('modal-talk--open')
  })
}