import Pagination from 'tui-pagination';
import { saveToLocalStorage } from './localStarage';
import { renderShoppingList } from './render-shopping-list';
import { getUniqueBook } from './render-shopping-list';

const paginationEl = document.querySelector('.tui-pagination');
const localStorageKey = 'bookarray';
const shoppingUl = document.querySelector('.shopping-list');


// let page = 1;

export function addPagination(total, page) {
  const options = {
    totalItems: total.length,
    itemsPerPage: 3,
    visiblePages: 2,
    page: page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
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

  const pagination = new Pagination(paginationEl, options);

  return pagination;
}


const booksArray= getUniqueBook(JSON.parse(localStorage.getItem(localStorageKey)));
console.log(booksArray);
// console.log(uniqueBook);
const booksPerPage = 3;
let pagination;

if (booksArray.length > 0) {
pagination = addPagination(booksArray, 1);
pagination.on('beforeMove', renderNextPage);
};


function renderFirstPage() {
    renderShoppingList(booksArray.slice(0,3));
};

renderFirstPage();
// pagination.on('beforeMove', renderNextPage);


function renderNextPage(eventData) {
  shoppingUl.innerHTML = "";
  console.log(eventData);
  const start = (eventData.page - 1) * booksPerPage;
  const pageItems = booksArray.slice(start, start + booksPerPage);
  console.log(start, pageItems);
  renderShoppingList(pageItems);
}
