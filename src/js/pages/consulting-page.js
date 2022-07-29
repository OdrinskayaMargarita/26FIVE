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
}
