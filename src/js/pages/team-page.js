export default () => {
  let employers = document.querySelectorAll('.js-employee')
  let employeeModal = document.querySelector('.team-modal')
  let employeeModalImg = document.querySelector('.employee__image--modal')

  employers.forEach(employee => {
    employee.addEventListener('click', () => {
      let coordX = Math.ceil(employee.getBoundingClientRect().x);
      let coordY = Math.ceil(employee.getBoundingClientRect().y);

      // employeeModalImg.style.top = coordY + 'px'
      // employeeModalImg.style.left = coordX + 'px'
      // console.log(employeeModalImg.style.top)
      // console.log(employeeModalImg.style.left)

      document.querySelector('html').classList.add('no-scroll')
      employeeModal.classList.add('team-modal--open')
      employeeModalImg.classList.add('img-scale')
    })
  })
}