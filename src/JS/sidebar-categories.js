import Notiflix from 'notiflix';
import { BooksAPI } from './fetchBooksAPI';
import { renderCategoriesList } from './renderCategoriesList';

const categoriesListEl = document.querySelector('.categories__list');

const booksApi = new BooksAPI();

const handleSearchBooksList = async event => {
  try {
    const { data } = await booksApi.fetchBooksCategoryList();
    if (data.lenght === 1) {
      Notiflix.Notify.info(
        'Sorry something went wrong, please try again later.'
      );
      return;
    }
    renderCategoriesList(data);
  } catch (error) {
    Notiflix.Notify.warning(
      'Sorry something went wrong, please try again later.'
    );
    // console.log(error.message);
  }

  categoriesListEl.addEventListener('click', async () => {
    const { data } = await booksApi.fetchBooksCategoryList();
    renderCategoriesList(data);
    handleCategoryItemClick();
    handleScrollCategories(categoriesListEl);
  });
};

document.addEventListener('DOMContentLoaded', handleSearchBooksList);

function handleCategoryItemClick() {
  const categoriesBtnEL = document.querySelector('[data-active-btn]');
  categoriesBtnEL.classList.remove('categories__active');
  categoriesBtnEL.classList.add('categories__btn');
}

function handleScrollCategories(element, position = 'start') {
  element.scrollIntoView({
    behavior: 'smooth',
    position,
  });
}