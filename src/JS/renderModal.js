import { Loading } from 'notiflix';
import { BooksAPI } from './fetchBooksAPI.js';
import { saveToLocalStorage } from './localStarage.js';
import amazon from '../images/amazon.png';
import amazon2x from '../images/amazon@2x.png';
import ibook from '../images/ibook.png';
import ibook2x from '../images/ibook@2x.png';
import bookshop from '../images/bookshop.png';
import bookshop2x from '../images/bookshop@2x.png';

const backdropEl = document.querySelector('[data-modal]');
const closeModalBtnEl = document.querySelector('[data-modal-close]');
const addBookBtnEl = document.querySelector('.modal-book__btn');
const deleteBookBtnEl = document.querySelector('.modal-book__btn__remove');
const modalEl = document.querySelector('.modal-main');
const homeBooks = document.querySelector('.books-section');
const modalWrapEl = document.querySelector('.modal');

let bookData;

homeBooks.addEventListener('click', e => {
  let test = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
  renderModal(test);

  // console.log(test);
});

const booksAPI = new BooksAPI();

export async function renderModal(bookID) {
  const book = await booksAPI.fetchBookByID(bookID);

  const { book_image, title, author, description, buy_links } = book.data;

  // console.log(buy_links.find(link => link.name === 'Amazon').url);

  bookData = book.data;

  const markup = `
      <div class="modal-book">
      <picture>
      <source media="(max-width: 767px)"
        srcset="${book_image
      ? book_image
      : './images/blank-l.jpg 1x, ./images/blank-l@2x.jpg 2x'}"
        type="image/jpg" /> 
  
        <source media="(min-width: 768px)"
          srcset="${book_image
      ? book_image
      : './images/blank-M.jpg 1x, ./images/blank-M@2x.jpg 2x'}"
          type="image/jpg" /> 
  
          <img class="modal-book__img" src="${book_image ? book_image : './images/blank-M.jpg'}        
        }" alt="Book cover" loading="lazy" width="330" heigth="485"/>
      </picture>
        <div class="modal-book__description">
          <div class="modal-book__info">
            <h2 class="modal-book__title">${title ? title : 'N/A'}</h2>
            <h3 class="modal-book__author">${author ? author : 'N/A'}</h3>
            <p class="modal-book__about">${description ? description : 'N/A'}</p>
          </div>
          <div>
            <ul class="book-stores">
              <li class="book-stores__item">
                <a class="book-stores__link" href="${buy_links.find(link => link.name === 'Amazon').url
      ? buy_links.find(link => link.name === 'Amazon').url
      : 'https://amazon.com'
    }" target="_blank" rel="noopener noreferrer"
                  aria-label="Amazon icon">
                  <img class="book-stores__img" srcset=" ${amazon} 1x, ${amazon2x} 2x
                 "src="${amazon}" alt="Amazon" width="62" height="19">
                  </a>
              </li>
              <li class="book-stores__item">
                <a class="book-stores__link" href="${buy_links.find(link => link.name === 'Apple Books').url
      ? buy_links.find(link => link.name === 'Apple Books').url
      : 'https://apple.com/ua/apple-books/'
    }" target="_blank" rel="noopener noreferrer"
                  aria-label="Apple Books icon">
                  <img class="book-stores__img" srcset=" ${ibook} 1x, ${ibook2x} 2x
                 "src="${ibook}" alt="Apple Books" width="33" height="32"></a>
              </li>
              <li class="book-stores__item">
                <a class="book-stores__link" href="${buy_links.find(link => link.name === 'Bookshop').url
      ? buy_links.find(link => link.name === 'Bookshop').url
      : 'https://bookshop.org/books/'
    }" target="_blank" rel="noopener noreferrer"
                  aria-label="Bookshop icon">
                  <img class="book-stores__img" srcset=" ${bookshop} 1x, ${bookshop2x} 2x
                 "src="${bookshop}" alt="Bookshops" width="38" height="36"></a>
              </li>
            </ul>   
          </div>
        </div>
      </div>  
      `;

  document.body.style.overflow = 'hidden';
  modalEl.insertAdjacentHTML('afterbegin', markup);

  let oneBook = { ...bookData };
  // Отримуємо з LocalStorage масив книжок (якщо він є)
  // let bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
  // console.log(bookArray.find(book => book._id === oneBook._id))
  // if (bookArray.find(book => book._id === oneBook._id)) {
  //   // debugger;
  //   console.log(bookArray.find(book => book._id === oneBook._id))
  //   addBookBtnEl.classList.remove('visually-hidden');
  //   deleteBookBtnEl.classList.add('visually-hidden');
  // }

  showModal(book);

  addBookBtnEl.addEventListener('click', async () => {
    const book = await booksAPI.fetchBookByID(bookID);
    bookData = book.data;
    addToShoppingList(bookData);
    console.log('ДОДАВАННЯ')
  });
  deleteBookBtnEl.addEventListener('click', async () => {
    const book = await booksAPI.fetchBookByID(bookID);
    bookData = book.data;
    deleteBookFromShopList(bookData);
    console.log('ПРИБИРАННЯ')
  });
}

const underBtnText = document.createElement('p');

function addToShoppingList(book) {
  let oneBook = { ...book };
  // Отримуємо з LocalStorage масив книжок (якщо він є)
  let bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
  if (bookArray.find(book => book._id === oneBook._id)) {
    return;
  }
  // addBookBtnEl.textContent = 'Remove from the shopping list';
  underBtnText.textContent =
    'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  underBtnText.classList.add('modal-book__underbtn');
  modalWrapEl.appendChild(underBtnText);
  bookArray.push(oneBook);
  saveToLocalStorage('bookarray', bookArray);
  deleteBookBtnEl.classList.remove('visually-hidden');
  addBookBtnEl.classList.add('visually-hidden');

  // addBookBtnEl.removeEventListener('click', addToShoppingList(bookData));
};

function deleteBookFromShopList(book) {

  let oneBook = { ...book };
  // Отримуємо з LocalStorage масив книжок (якщо він є)
  let bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
  if (bookArray.find(book => book._id === oneBook._id)) {
    console.log(bookArray)
    addBookBtnEl.classList.remove('visually-hidden');
    deleteBookBtnEl.classList.add('visually-hidden');


    let index = bookArray.findIndex(e => e._id === oneBook._id);
    bookArray.splice(index, 1);
    saveToLocalStorage('bookarray', bookArray);
    // deleteBookBtnEl.removeEventListener('click', deleteBookFromShopList(bookData));

    return;
    }
}

function showModal(book) {
  backdropEl.classList.remove('is-hidden');
  document.addEventListener('keydown', handleCloseModal);
  closeModalBtnEl.addEventListener('click', closeModal);
  document.addEventListener('click', handleCloseModal);

  let oneBook = { ...bookData };
  let bookArray = JSON.parse(localStorage.getItem('bookarray')) || [];
  console.log(bookArray.find(book => book._id === oneBook._id))
  if (bookArray.find(book => book._id === oneBook._id)) {
    // debugger;
    console.log(bookArray.find(book => book._id === oneBook._id))
    addBookBtnEl.classList.add('visually-hidden');
    deleteBookBtnEl.classList.remove('visually-hidden');
  }
}

function closeModal() {
  document.body.style.overflow = '';
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', handleCloseModal);
  closeModalBtnEl.removeEventListener('click', closeModal);
  document.removeEventListener('click', handleCloseModal);
  setTimeout(() => {
    modalEl.innerHTML = '';
  }, 300);
  underBtnText.remove();
  // addBookBtnEl.textContent = 'Add to shopping list';
}

function handleCloseModal(event) {
  if (event.target === backdropEl || (event.type === 'keydown' && event.key === 'Escape')) {
    closeModal();
  }
}