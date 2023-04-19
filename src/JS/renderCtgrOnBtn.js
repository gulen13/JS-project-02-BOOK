import { createMarkupCategory, getTopBooks } from './booksListGenerator';
import { spinerRender } from './spiner';
import { renderCategoriesList } from './renderCategoriesList';

const sideCagories = document.querySelector('.sidebar-categories');
const spiner = document.querySelector('.lds-roller');

sideCagories.addEventListener('click', e => {

  if (!e.target.classList.contains("categories__btn")) {
    return
  }

  let categoryName = e.target.textContent;

  if (categoryName === "All categories") {
    spiner.classList.remove('visually-hidden');
    spinerRender();
    getTopBooks();
  } else {
    createMarkupCategory(categoryName);
  }
});