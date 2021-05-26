import { GET_RETURNED_BOOKS } from './action';

export const returnedBooks = (state: any) => state;

const returnedBooksReducer = (books = [], action: any) => {
  switch (action.type) {
    case GET_RETURNED_BOOKS:
      return action.books;

    default:
      return books;
  }
}

export default returnedBooksReducer;
