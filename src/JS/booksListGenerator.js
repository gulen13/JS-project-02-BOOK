import { BooksAPI } from './fetchBooksAPI';

const mainSectionDiv = document.querySelector('.books-container');

window.addEventListener('resize', function (event) {
  mainSectionDiv.innerHTML = '';

  getTopBooks();
});

async function getTopBooks() {
  try {
    const booksAPI = new BooksAPI();
    const booksCategories = await booksAPI.fetchTopBooks();

    if (booksCategories.data.length > 0) {
      booksCategories.data.forEach(categoryList => {
        createBlock(categoryList);
      });
    } else {
      console.error('No data available');
    }
  } catch (error) {
    console.error(error);
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
        <button class="list-markup__see-more-button" data-category="${categoryList.list_name}">see more</button>
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
      console.log(category);
      createMarkupCategory(category);
    });
  });
}

function createCard(books, cardsAmount, cardsBlock) {
  for (let j = 0; j < cardsAmount; j++) {
    const blockCard = `
      
        <li class="list-book__book-card  data-id=${books[j]._id}">
          <a href="#">
            <img src="${books[j].book_image}" alt="${books[j].title}" class="book-card__img"></img>
            <h2 class="card__title">${books[j].title}</h2>
            <p class="card__paragraph">${books[j].author}</p>
          </a>  
        </li> 
      
    `;

    cardsBlock.innerHTML += blockCard;
  }
}

async function createMarkupCategory(category) {
  const booksAPI = new BooksAPI();
  const selectedCategoryBooks = await booksAPI.fetchBooksByCategory(category);

  console.log(selectedCategoryBooks.data);

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
      
        <li class="list-book__book-card  data-id=${book._id}">
          <a href="#">
            <img src="${book.book_image}" alt="${book.title}" class="book-card__img"></img>
            <h2 class="card__title">${book.title}</h2>
            <p class="card__paragraph">${book.author}</p>
          </a>  
        </li> 
      
    `;

    cardsContainer.innerHTML += blockCard;
  });
}

getTopBooks();
