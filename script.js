// ES6 JavaScript to create an accordion

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((item) => {
  const button = item.querySelector('.accordion-button')

  button.addEventListener('click', () => {
    // Toggle the active class to expand/collapse the content
    item.classList.toggle('active')
  })
})
