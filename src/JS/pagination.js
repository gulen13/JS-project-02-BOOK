import Pagination from 'tui-pagination';
import { saveToLocalStorage } from './localStarage';

const paginationEl = document.querySelector('.tui-pagination');
const localStorageKey = 'bookarray';

export function addPagination(total, page) {
  const options = {
    totalItems: total.length,
    itemsPerPage: 3,
    visiblePages: 3,
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

// const booksArray= JSON.parse(localStorage.getItem(localStorageKey)); 
// console.log(booksArray);
// addPagination(booksArray, 1); 
console.log(JSON.parse(localStorage.getItem(localStorageKey)));

const booksArray= JSON.parse(localStorage.getItem(localStorageKey)); 

addPagination(booksArray, 1);