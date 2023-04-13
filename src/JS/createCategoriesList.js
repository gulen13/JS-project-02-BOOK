export function createCategoriesList({ list_name }) {
  return `<li class="categories__item">
        <button type="button" class="categories__btn">${list_name}</button>
      </li>`;
}