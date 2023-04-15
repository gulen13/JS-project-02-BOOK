import { saveToLocalStorage } from './localStarage';

const shoppingUl = document.querySelector('.shopping-list');
const shoppingWrapper = document.querySelector('.shopping-wrapper');
const localStorageKey = 'bookarray';

if (
  JSON.parse(localStorage.getItem(localStorageKey)) &&
  JSON.parse(localStorage.getItem(localStorageKey)).length > 0
) {
  shoppingWrapper.hidden = true;
  renderShoppingList(JSON.parse(localStorage.getItem(localStorageKey)));
} else {
  shoppingWrapper.hidden = false;
}

function renderShoppingList(books) {
  const markup = books
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
            <a href="${book.buy_links.find(link => link.name === 'Amazon').url};
            })}">
              <svg width="48" height="15">
                <use href="./images/icons.svg#icon-amazon"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Apple Books').url
            };
            })}">
              <svg width="28" height="27">
                <use href="./images/icons.svg#icon-ibook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="${
              book.buy_links.find(link => link.name === 'Bookshop').url
            };
            })}">
              <svg width="32" height="30">
                <use href="./images/icons.svg#icon-book-shop"></use>
              </svg>
            </a>
          </li>
        </ul>
        <p class="shopping-list--description">
        ${book.description ? book.description : 'N/A'}
        </p>
        <p class="shopping-list--author">${book.author}</p>
        <button class="shopping-list--btn" type="button">
          <svg class="shopping-list--btn__icon">
            <use href="./images/icons.svg#icon-dump"></use>
          </svg>
        </button>
      </li>
      `;
    })
    .join('');
  shoppingUl.insertAdjacentHTML('beforeend', markup);
}
