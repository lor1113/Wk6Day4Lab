document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',formSubmit);
  const deleteForm = document.querySelector('#delete-all-form');
  deleteForm.addEventListener('submit',formDelete);
})

const formSubmit = function (event) {
  event.preventDefault();
  console.dir('form submitted');
  readingList = document.querySelector('#reading-list')
  const listElement = document.createElement('li')
  readingList.appendChild(listElement)
  const titleElement = document.createElement('h2')
  const authorElement = document.createElement('h4')
  const categoryElement = document.createElement('div')
  listElement.appendChild(titleElement)
  listElement.appendChild(authorElement)
  listElement.appendChild(categoryElement)
  let titleText = document.createTextNode(event.target.title.value)
  titleElement.appendChild(titleText)
  let authorText = document.createTextNode(event.target.author.value)
  authorElement.appendChild(authorText)
  let categoryText = document.createTextNode(event.target.category.value)
  categoryElement.appendChild(categoryText)
  const form = document.querySelector('#new-item-form');
  //form.reset()
}

const formDelete = function (event) {
  event.preventDefault();
  readingList = document.querySelector('#reading-list');
  readingList.replaceChildren();
}