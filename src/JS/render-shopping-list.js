import { saveToLocalStorage } from './localStarage';
import amazon from '../images/amazon.png';
import amazon2x from '../images/amazon@2x.png';
import ibook from '../images/ibook.png';
import ibook2x from '../images/ibook@2x.png';
import bookshop from '../images/bookshop.png';
import bookshop2x from '../images/bookshop@2x.png';
import sprite from '../images/icons.svg';
// import { addPagination } from './pagination';

const shoppingUl = document.querySelector('.shopping-list');
const shoppingWrapper = document.querySelector('.shopping-wrapper');
const paginationEl = document.querySelector('.tui-pagination');
const localStorageKey = 'bookarray';
let bookArray = [];
// let pagination;

if (
  JSON.parse(localStorage.getItem(localStorageKey)) &&
  JSON.parse(localStorage.getItem(localStorageKey)).length > 0
) {
  shoppingWrapper.hidden = true;
  bookArray = JSON.parse(localStorage.getItem(localStorageKey));
}

/* export function getUniqueBook(books) {
  return (uniqueBook = Array.from(
    new Set(books.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item)));
} */

export function renderShoppingList(bookArray) {
  const markup = bookArray
    .map(book => {
      return `
      <li class="shopping-list--item" data-id="${book._id}">
        <div class="shopping-list--img-wrapper">
          <img
            class="shopping-list--img"
            src="${book.book_image}"
            alt=""
          />
          <p class="shopping-list--author__mobile">${book.author}</p>
        </div>
        <div class="shopping-list--info-wrapper">
          <h2 class="shopping-list--title">${book.title}</h2>
          <p class="shopping-list--category">
          ${book.list_name}
          </p>
        </div>
        <ul class="shopping-list--link-list">
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Amazon').url
                ? book.buy_links.find(link => link.name === 'Amazon').url
                : 'https://www.amazon.com/ref=nav_logo'
            };
            })}">
            <img class="book-stores__img img-amazon" srcset=" ${amazon} 1x, ${amazon2x}   2x
            "src="${amazon}" alt="Amazon" width="62" height="19">
            </a>
          </li>
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Apple Books').url
                ? book.buy_links.find(link => link.name === 'Apple Books').url
                : 'https://www.apple.com/ua/apple-books/'
            };
            })}">
            <img class="book-stores__img" srcset=" ${ibook} 1x, ${ibook2x}   2x
            "src="${ibook}" alt="Apple Books" width="33" height="32">
            </a>
          </li>
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Bookshop').url
                ? book.buy_links.find(link => link.name === 'Bookshop').url
                : 'https://bookshop.org/'
            };
            })}">
            <img class="book-stores__img" srcset=" ${bookshop} 1x, ${bookshop2x}   2x
            "src="${bookshop}" alt="Bookshops" width="38" height="36">
            </a>
          </li>
        </ul>
        <p class="shopping-list--description">
        ${book.description ? book.description : 'N/A'}
        </p>
        <p class="shopping-list--author">${book.author}</p>
        <button class="shopping-list--btn" type="button" aria-label="Remove">
          <div>
          <svg class="shopping-list--btn__icon">
            <use href="${sprite + '#icon-dump'}"></use>
          </svg>
          </div>
        </button>
      </li>
      `;
    })
    .join('');
  shoppingUl.insertAdjacentHTML('beforeend', markup);
}

export function deleteBookFromShopList(event) {
  if (
    event.target.parentElement.parentElement.parentElement.classList.value ===
    'shopping-list--btn'
  ) {
    let id =
      event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
        'data-id'
      );
    let ind = bookArray.findIndex(e => e._id === id);
    if (ind !== -1) {
      bookArray.splice(ind, 1);
      saveToLocalStorage(localStorageKey, bookArray);
    }
    if (bookArray.length === 0) {
      shoppingWrapper.hidden = false;
    }
    if (
      JSON.parse(localStorage.getItem(localStorageKey)) &&
      JSON.parse(localStorage.getItem(localStorageKey)).length >= 0
    ) {
      shoppingUl.innerHTML = '';
      // renderShoppingList(JSON.parse(localStorage.getItem(localStorageKey)));
      console.log(ind);
      console.log(bookArray);
      const page = Math.ceil((ind + 1) / 3);
      console.log(Math.ceil((ind + 1) / 3));
      const start = (page - 1) * 3;
      const end = start + 3;
      console.log(start, end);
      const paginatedData = JSON.parse(
        localStorage.getItem(localStorageKey)
      ).slice(start, end);
      console.log(paginatedData);
      renderShoppingList(paginatedData);
      if (JSON.parse(localStorage.getItem(localStorageKey)).length <= 3) {
        paginationEl.hidden = true;
      }
    }
  }
}

// const shoppingDelBtn = document.querySelector('.shopping-list');
// shoppingDelBtn.addEventListener('click', deleteBookFromShopList);
