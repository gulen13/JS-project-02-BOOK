import { BooksAPI } from './fetchBooksAPI';

let timerId = null;

const firstTop = document.querySelector('.first-top');
const secondTop = document.querySelector('.second-top');
const thirdTop = document.querySelector('.third-top');
const fourthTop = document.querySelector('.fourth-top');

const booksLists = [firstTop, secondTop, thirdTop, fourthTop];

const selectedCategories = [
  'Combined Print and E-Book Fiction',
  'Combined Print and E-Book Nonfiction',
  'Hardcover Fiction',
  'Hardcover Nonfiction',
];

let numOfList = 0;

async function getTopBooks(category) {
  const booksAPI = new BooksAPI();
  const booksCategories = await booksAPI.fetchTopBooks();

  if (booksCategories.data.length > 0) {
    booksCategories.data.forEach(element => {
      if (element.list_name == category) {
        adaptiveMarkup(element.books, numOfList);
        numOfList++;
      } else {
        return;
      }
    });
  } else {
    console.error('No data available');
  }
}

function adaptiveMarkup(books, listNum) {
  if (window.innerWidth <= 425) {
    createMarkup(books, listNum, 1);
  } else if (window.innerWidth <= 768) {
    createMarkup(books, listNum, 3);
  } else {
    createMarkup(books, listNum, 5);
  }
}

function createMarkup(books, listNum, cardsAmount) {
  for (let j = 0; j < cardsAmount; j++) {
    const bookCard = `
    <div class="list-book__book-card">
    <a href="#">
    <img src="${books[j].book_image}" alt="${books[j].title}" class="book-card__img"></img>
    <h2 class="card__title">${books[j].title}</h2>
    <p class="card__paragraph">${books[j].author}</p>
    </a>  
    </div> 
`;

    if (listNum < booksLists.length) booksLists[listNum].innerHTML += bookCard;
  }
}

let counter = 0;
timerId = setInterval(() => {
  getTopBooks(selectedCategories[0]);
  getTopBooks(selectedCategories[1]);
  getTopBooks(selectedCategories[2]);
  getTopBooks(selectedCategories[3]);
  counter++;
  if (counter === 4) {
    clearInterval(timerId);
  }
}, 30);
