import { createCategoriesList } from "./createCategoriesList";

const categoriesListEl = document.querySelector('.categories__list');

export function renderCategoriesList(data) {
  const markup = data.map(createCategoriesList).join('');
  categoriesListEl.insertAdjacentHTML('beforeend', markup);
}