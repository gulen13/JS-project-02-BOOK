import axios from 'axios';

export class BooksAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  constructor() {
    this.page = 1;
    this.query = '';
  }

  async fetchBooksCategoryList() {
    const response = await axios.get(`${this.#BASE_URL}category-list`);
    return response;
  }

  async fetchTopBooks() {
    const response = await axios.get(`${this.#BASE_URL}top-books`);
    return response;
  }

  async fetchBookByID(id) {
    const response = await axios.get(`${this.#BASE_URL}${id}`);
    return response;
  }

  async fetchBooksByCategory(category) {
    const searchParams = new URLSearchParams({
      category: `${category}`,
    });
    const response = await axios.get(
      `${this.#BASE_URL}category?${searchParams}`
    );
    return response;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  decrementPage() {
    this.page -= 1;
  }
}