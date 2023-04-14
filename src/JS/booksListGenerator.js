import { BooksAPI } from './fetchBooksAPI';

const mainSectionDiv = document.querySelector('.books-container');

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
      <div class="list-markup__block"></div>
      <div class="list-markup__button-wrapper">
        <button class="list-markup__see-more-button">see more</button>
      </div>
    </div>
  `;

  mainSectionDiv.innerHTML += blockForCard;

  const cardsContainer = mainSectionDiv.lastElementChild.querySelector(
    '.list-markup__block'
  );
  adaptiveMarkup(categoryList.books, cardsContainer);
}

function createCard(books, cardsAmount, cardsBlock) {
  for (let j = 0; j < cardsAmount; j++) {
    const blockForCard = `
      
        <div class="list-book__book-card  data-id=${books[j]._id}">
          <a href="#">
            <img src="${books[j].book_image}" alt="${books[j].title}" class="book-card__img"></img>
            <h2 class="card__title">${books[j].title}</h2>
            <p class="card__paragraph">${books[j].author}</p>
          </a>  
        </div> 
      
    `;

    cardsBlock.innerHTML += blockForCard;
  }
}

getTopBooks();
