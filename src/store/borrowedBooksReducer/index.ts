import { GET_BORROWED_BOOKS } from './action';

export const borrowedBooks = (state: any) => state;

const borrowedBooksReducer = (books = [], action: any) => {
  switch (action.type) {
    case GET_BORROWED_BOOKS:
      return action.books;

    default:
      return books;
  }
}

export default borrowedBooksReducer;
