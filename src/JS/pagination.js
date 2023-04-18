import Pagination from 'tui-pagination';
import { saveToLocalStorage } from './localStarage';
import {
  renderShoppingList,
  deleteBookFromShopList,
} from './render-shopping-list';

const paginationEl = document.querySelector('.tui-pagination');
const localStorageKey = 'bookarray';
const shoppingUl = document.querySelector('.shopping-list');

const booksPerPage = 3;

// export function addPagination(total, page) {
const options = {
  totalItems: JSON.parse(localStorage.getItem(localStorageKey)).length,
  itemsPerPage: booksPerPage,
  visiblePages: 2,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn theme">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

// const pagination = new Pagination('tui-pagination-container', options);
// pagination.on('beforeMove', renderNextPage);

//   return new Pagination(paginationEl, options);;
// }

let pagination;

if (
  JSON.parse(localStorage.getItem(localStorageKey)) &&
  JSON.parse(localStorage.getItem(localStorageKey)).length > 3
) {
  pagination = new Pagination('tui-pagination-container', options);
  pagination.on('beforeMove', renderNextPage);
  }

function renderFirstPage() {
  if (
    JSON.parse(localStorage.getItem(localStorageKey)) &&
    JSON.parse(localStorage.getItem(localStorageKey)).length > 0
  ) {
    renderShoppingList(
      JSON.parse(localStorage.getItem(localStorageKey)).slice(0, 3)
    );
  }
}

renderFirstPage();

function renderNextPage(eventData) {
  if (
    JSON.parse(localStorage.getItem(localStorageKey)) &&
    JSON.parse(localStorage.getItem(localStorageKey)).length > 0
  ) {
    shoppingUl.innerHTML = '';
    // console.log(eventData);
    const start = (eventData.page - 1) * booksPerPage;
    const pageItems = JSON.parse(localStorage.getItem(localStorageKey)).slice(
      start,
      start + booksPerPage
    );
    // console.log(start, pageItems);
    renderShoppingList(pageItems);
  }
}

const shoppingDelBtn = document.querySelector('.shopping-list');
shoppingDelBtn.addEventListener('click', deleteAndUpdatePagination);
console.log(JSON.parse(localStorage.getItem(localStorageKey)));

function deleteAndUpdatePagination(book) {
  deleteBookFromShopList(book);
  // pagination = new Pagination('tui-pagination-container', options);
  if (!JSON.parse(localStorage.getItem(localStorageKey))) {
    paginationEl.innerHTML = '';
  }
  if (JSON.parse(localStorage.getItem(localStorageKey)).length % 3 === 0) {
    pagination.reset(JSON.parse(localStorage.getItem(localStorageKey)).length);
    pagination.movePageTo(
      Math.ceil(JSON.parse(localStorage.getItem(localStorageKey)).length - 1) /
        3
    );
  }
}
