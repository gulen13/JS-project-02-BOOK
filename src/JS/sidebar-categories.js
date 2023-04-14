import Notiflix from 'notiflix';
import { BooksAPI } from './fetchBooksAPI';
import { renderCategoriesList } from './renderCategoriesList';

const categoriesListEl = document.querySelector('.categories__list');

const booksApi = new BooksAPI();

const handleSearchBooksList = async event => {
  try {
    const {data} = await booksApi.fetchBooksCategoryList();
    if (data.lenght === 1) {
      Notiflix.Notify.info();
      return
    }
    renderCategoriesList(data);
  } catch (error) {
    Notiflix.Notify.warning();
    // console.log(error);
  }
}

document.addEventListener('DOMContentLoaded', handleSearchBooksList);