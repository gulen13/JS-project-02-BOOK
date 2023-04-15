import { createMarkupCategory, getTopBooks } from './booksListGenerator';
import { renderCategoriesList } from './renderCategoriesList'

const sideCagories = document.querySelector('.sidebar-categories');

sideCagories.addEventListener('click', e => {

  if (!e.target.classList.contains("categories__btn")) {
    return
  }

  let categoryName = e.target.textContent;
  if (categoryName === "All categories") {
    getTopBooks();
  } else {
    createMarkupCategory(categoryName);
  }
});