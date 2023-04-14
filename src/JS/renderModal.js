import { Loading } from 'notiflix';
import { BooksAPI } from './fetchBooksAPI.js';
import { saveToLocalStorage } from './localStarage.js'

const modalEl = document.querySelector('[data-modal]');
const closeModalBtnEl = document.querySelector('[data-modal-close]');
const addBookBtnEl = document.querySelector('.modal-book__btn');
const backdropEl = document.querySelector('.modal-2');

let bookData;

document.addEventListener('click', e => {
  let test = e.target.parentElement.parentElement.getAttribute("data-id");
  renderModal(test);

  // console.log(test);

})

const booksAPI = new BooksAPI();

export async function renderModal(bookID) {
  const book = await booksAPI.fetchBookByID(bookID);

  const { book_image, title, author, description, buy_links } = book.data;

  console.log(buy_links.find(link => link.name === "Amazon").url)

  bookData = book.data;


  const markup = `

      <div class="modal-book">
        <img class="modal-book__img" src="${book_image}" alt="Book cover" loading="lazy"/>
        <div class="modal-book__description">
          <div class="modal-book__info">
            <h2 class="modal-book__title">${title}</h2>
            <h3 class="modal-book__author">${author}</h3>
            <p class="modal-book__about">${description ? description : "N/A"}</p>
          </div>
          <div>
            <ul class="book-stores">
              <li class="book-stores__item">
                <a class="book-stores__link" href="${(buy_links.find(link => link.name === "Amazon").url)}" target="_blank" rel="noopener noreferrer"
                  aria-label="Amazon icon">
                  <svg class="book-stores__icon" width="62" height="19">
                  <use href="./images/icons.svg#icon-amazon"></use></svg></a>
              </li>
              <li class="book-stores__item">
                <a class="book-stores__link" href="" target="_blank" rel="noopener noreferrer"
                  aria-label="Apple Books icon">
                  <svg class="book-stores__icon" width="32" height="32">
                  <use href="./images/icons.svg#icon-ibook"></use></svg></a>
              </li>
              <li class="book-stores__item">
                <a class="book-stores__link" href="" target="_blank" rel="noopener noreferrer"
                  aria-label="Bookshop icon">
                  <svg class="book-stores__icon" width="38" height="36">
                  <use href="./images/icons.svg#icon-book-shop"></use></svg></a>
              </li>
            </ul>   
          </div>
        </div>
      </div>  `;

  backdropEl.insertAdjacentHTML('afterbegin', markup);
  showModal();
  // updateModalBtn();

  addBookBtnEl.addEventListener('click', addToShoppingList(bookData));
}

function addToShoppingList(book) {
  const oneBook = { ...book };
  // Отримуємо з LocalStorage масив книжок (якщо він є)
  const bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
  // if (bookArray.lenght > 0 ) {
  // }

  bookArray.push(oneBook);
  saveToLocalStorage('bookarray', bookArray);
  isBookInShoppingList = true;
  // updateModalBtn();
}

function showModal() {
  modalEl.classList.remove('is-hidden');
  document.addEventListener('keydown', handleCloseModal);
  // closeModalBtnEl.addEventListener('click', closeModal);
  backdropEl.addEventListener('click', closeModal);
}

function closeModal() {
  modalEl.classList.add('is-hidden');
  // addBookBtnEl.removeEventListener('keydown', handleCloseModal);
  // closeModalBtnEl.removeEventListener('click', closeModal);
  backdropEl.removeEventListener('click', closeModal);
  backdropEl.innerHTML = '';
}

function handleCloseModal(event) {
  if (
    event.type === 'click' ||
    (event.type === 'keydown' && event.key === 'Escape')
  ) {
    closeModal();
  }
}

// Данило

// addBookBtnEl.addEventListener('click', addToShoppingList);

// function addToShoppingList() {
//   const oneBook = { ...book };

//   const array = [];
// const oneBook = { book_image, title, author, description, buy_links, _id, list_name };
   // Отримуємо з LocalStorage масив книжок (якщо він є)
  // const bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
  // bookArray.push(oneBook);
  // saveToLocalStorage('bookarray', array);
  // updateModalBtn();
// }

// Варіант 2

// function addToShoppingList() {
//   const oneBook = { ...book };
//   // Отримуємо з LocalStorage масив книжок (якщо він є)
//   const bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
//   bookArray.push(oneBook);
//   saveToLocalStorage('bookarray', bookArray);
//   isBookInShoppingList = true;
//   updateModalBtn();
// }

// // Варіант 2

// // function addToShoppingList() {
// //   const oneBook = { ...book };
// //   const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// //   shoppingList.push(oneBook);
// //   localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
// //   isBookInShoppingList = true;
// //   updateModalBtn();
// // }

// // Варіант 3

// // async function addToShoppingList() {
// //   const oneBook = { ...book };
// //   const bookArray = await getItemFromLocalStorage('bookarray') || [];
// //   bookArray.push(oneBook);
// //   await saveToLocalStorage('bookarray', bookArray);
// //   isBookInShoppingList = true;
// //   updateModalBtn();
// //   }

// function updateModalBtn() {
//   if (isBookInShoppingList) {
//     addBookBtnEl.textContent = 'Remove from the shopping list';
//     const underBtnText = document.createElement('p');
//     underBtnText.textContent =
//       'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
//     underBtnText.classList.add('modal-book__underbtn');
//     modalEl.appendChild(underBtnText);
//   } else {
//     addBookBtnEl.textContent = 'Add to shopping list';
//   }
// }

// let isBookInShoppingList = false;

// ДІСТАТИ З ЛОКАЛ СТОРЕДЖ

// function updateModalBtn() {
//   if (localStorage.getItem) {
//     addBookBtnEl.textContent = 'Remove from the shopping list';
//     const underBtnText = document.createElement('p');
//     underBtnText.textContent =
//       'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
//     underBtnText.classList.add('modal-book__underbtn');
//     modalEl.appendChild(underBtnText);
//   } else {
//     addBookBtnEl.textContent = 'Add to shopping list';
//   }
// }

// src="${book_image ? book_image : './images/blank-M.jpg'}"/>
// ${title ? title : 'N/A'}
