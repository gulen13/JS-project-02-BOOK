import { BooksAPI } from './fetchBooksAPI';
import Notiflix from 'notiflix';

const mainSectionDiv = document.querySelector('.books-best-container');
const booksTitileHome = document.querySelector('.books-section__title');

window.addEventListener('resize', function (event) {
  mainSectionDiv.innerHTML = '';

  getTopBooks();
});

export async function getTopBooks() {
  booksTitileHome.classList.remove('display-none');
  mainSectionDiv.innerHTML = '';
  try {
    const booksAPI = new BooksAPI();
    const booksCategories = await booksAPI.fetchTopBooks();

    if (booksCategories.data.length > 0) {
      booksCategories.data.forEach(categoryList => {
        createBlock(categoryList);
      });
    } else {
      Notiflix.Notify.warning('No data available');
    }
  } catch (error) {
    Notiflix.Notify.info('Oops... Something went wrong(');
  }
}

function adaptiveMarkup(books, cardsBlock) {
  if (window.innerWidth < 768) {
    createCard(books, 1, cardsBlock);
  } else if (window.innerWidth < 1440) {
    createCard(books, 3, cardsBlock);
  } else {
    createCard(books, 5, cardsBlock);
  }
}

function createBlock(categoryList) {
  const blockForCard = `
    <div class="books-section__list-markup">
      <p class="list-markup__paragraph">${categoryList.list_name}</p>
      <ul class="list-markup__block"></ul>
      <div class="list-markup__button-wrapper">
        <button class="list-markup__see-more-button" aria-label="see more" data-category="${categoryList.list_name}">see more</button>
      </div>
    </div>
  `;

  mainSectionDiv.innerHTML += blockForCard;

  const cardsContainer = mainSectionDiv.lastElementChild.querySelector(
    '.list-markup__block'
  );
  adaptiveMarkup(categoryList.books, cardsContainer);

  const seeMoreButtons = mainSectionDiv.querySelectorAll(
    '.list-markup__see-more-button'
  );
  seeMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      // console.log(category);
      createMarkupCategory(category);
    });
  });
}

function createCard(books, cardsAmount, cardsBlock) {
  for (let j = 0; j < cardsAmount; j++) {
    const blockCard = `

        <li class="list-book__book-card"  data-id="${books[j]._id}">
          <a>
          <div class="card-thumb">
            <img src="${books[j].book_image}" alt="${books[j].title}" class="book-card__img"></img>
            <p class="card-overlay-text card-overlay">quick view</p>
            </div>
            <h2 class="card__title">${books[j].title}</h2>
            <p class="card__paragraph">${books[j].author}</p>
          </a>
        </li>

    `;

    cardsBlock.innerHTML += blockCard;
  }
}

export async function createMarkupCategory(category) {
  booksTitileHome.classList.add('display-none');
  const booksAPI = new BooksAPI();
  const selectedCategoryBooks = await booksAPI.fetchBooksByCategory(category);

  // console.log(selectedCategoryBooks.data);

  const cardsBlock = `
      <div class="block-for-books">
      <h2 class="block-for-books__title">${category}</h2>
      <ul class="block-for-books__list"></ul>
      </div>
    `;
  mainSectionDiv.innerHTML = cardsBlock;

  const cardsContainer = mainSectionDiv.lastElementChild.querySelector(
    '.block-for-books__list'
  );

  selectedCategoryBooks.data.forEach(book => {
    const blockCard = `
        <li class="list-book__book-card"  data-id="${book._id}">
          <a>
          <div class="card-thumb">
            <img src="${book.book_image}" alt="${book.title}" class="book-card__img"></img>
            <p class="card-overlay-text card-overlay">quick view</p>
            </div>
            <h2 class="card__title">${book.title}</h2>
            <p class="card__paragraph">${book.author}</p>
          </a>
        </li>
    `;

    cardsContainer.innerHTML += blockCard;
  });
}

getTopBooks();

// замінити функцію для відображення see more!!!!!!!!!!!!!!!!!!!!!

// function createBlock(categoryList) {
//   const blockForCard = `
//     <div class="books-section__list-markup">
//       <p class="list-markup__paragraph">${categoryList.list_name}</p>
//       <ul class="list-markup__block" data-ulll="${categoryList.list_name}"></ul>
//       <div class="list-markup__button-wrapper">
//         <button class="list-markup__see-more-button" data-category="${categoryList.list_name}">see more</button>
//       </div>
//     </div>
//   `;

//   mainSectionDiv.innerHTML += blockForCard;

//   const cardsContainer = mainSectionDiv.lastElementChild.querySelector(
//     '.list-markup__block'
//   );

//   const seeMoreButtons = mainSectionDiv.querySelectorAll(
//     '.list-markup__see-more-button'
//   );
//   seeMoreButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const category = button.dataset.category;
//       createMarkupCategory(category);
//       button.classList.toggle('hide');
//       button.innerHTML = 'Hide';
//       if (button.classList.contains("hide")) {
//         console.log('hide');
//         button.addEventListener('click', getTopBooks)
//       }
//     });
//   })

//   adaptiveMarkup(categoryList.books, cardsContainer);

// }

// export async function createMarkupCategory(category) {
//   booksTitileHome.classList.add('display-none');
//   const booksAPI = new BooksAPI();
//   const selectedCategoryBooks = await booksAPI.fetchBooksByCategory(category);

//   const ul = document.querySelector(`[data-ulll="${category}"]`);

//   console.log(ul);

//   ul.innerHTML = '';

//   selectedCategoryBooks.data.forEach(book => {
//     const blockCard = `

//         <li class="list-book__book-card"  data-id="${book._id}">
//           <a href="#">
//           <div class="card-thumb">
//             <img src="${book.book_image}" alt="${book.title}" class="book-card__img"></img>
//             <p class="card-overlay-text card-overlay">quick view</p>
//             </div>
//             <h2 class="card__title">${book.title}</h2>
//             <p class="card__paragraph">${book.author}</p>
//           </a>
//         </li>

//     `;

//     ul.innerHTML += blockCard;
//   });
// }

// getTopBooks();
