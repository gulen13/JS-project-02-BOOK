import { fetchBookByID } from './fetchBooksAPI.js';

const modalEl = document.querySelector("[data-modal]")
const closeModalBtnEl = document.querySelector('.modal__btn-close');
const addBookBtnEl = document.querySelector('.modal-book__btn');
const backdropEl = document.querySelector('.backdrop');


export function renderModal(book) {
  const { book_image, title, author, description } = book;
  const markup = `
  <div class="backdrop is-hidden" data-modal>
    <div class="modal">
      <button type="button" class="modal__btn-close" data-modal-close>
        <svg class="modal__icon-close" width="28" height="28">
          <use href="./images/icons.svg#close"></use>
        </svg>
      </button>
      <div class="modal-book">
        <img class="modal-book__img" src="${book_image}" alt="Book cover" loading="lazy"/>
        <div class="modal-book__description">
          <div class="modal-book__info">
            <h2 class="modal-book__title">${title}</h2>
            <h3 class="modal-book__author">${author}</h3>
            <p class="modal-book__about">${description}</p>
          </div>

          <div>
            <ul class="book-stores">
              <li class="book-stores__item">
                <a class="book-stores__link" href="https://amazon.com" target="_blank" rel="noopener noreferrer"
                  aria-label="Amazon icon">
                  <svg class="book-stores__icon" width="62" height="19">
                  <use href="./images/icons.svg#icon-amazon"></use></svg></a>
              </li>
              <li class="book-stores__item">
                <a class="book-stores__link" href="https://books.apple.com/" target="_blank" rel="noopener noreferrer"
                  aria-label="Apple Books icon">
                  <svg class="book-stores__icon" width="32" height="32">
                  <use href="./images/icons.svg#icon-ibook"></use></svg></a>
              </li>
              <li class="book-stores__item">
                <a class="book-stores__link" href="https://bookshop.org/" target="_blank" rel="noopener noreferrer"
                  aria-label="Bookshop icon">
                  <svg class="book-stores__icon" width="38" height="36">
                  <use href="./images/icons.svg#icon-book-shop"></use></svg></a>
              </li>
            </ul>   
          </div>
        </div>
      </div>  
      <button type="button" class="modal-book__btn">Add to shopping list</button>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', markup);
}

export function showModal() {
  modalEl.classList.remove('is-hidden');
}

function closeModal() {
  modalEl.classList.add('is-hidden');
}

closeModalBtnEl.addEventListener('click', () => {
  closeModal();
});

backdropEl.addEventListener('click', (event) => {
  if (event.target === backdropEl) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

addBookBtnEl.addEventListener('click', addToShoppingList);

export function addToShoppingList() {
  const bookObject = { ...book };
  localStorage.setItem(bookObject.KEY, JSON.stringify(bookObject));
  
  addBookBtnEl.textContent = 'Remove from the shopping list';
  
  const underBtnText = document.createElement('p');
  underBtnText.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  modalEl.appendChild(underBtnText);
  }
  

