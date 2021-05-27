import { GET_RETURNED_BOOKS, ADD_BOOK } from './action';

export const returnedBooks = (state: any) => state;

const returnedBooksReducer = (books = [], action: any) => {
  switch (action.type) {
    case GET_RETURNED_BOOKS:
      return action.books;

    case ADD_BOOK:
      // @ts-ignore
      return [action.book, ...books];

    default:
      return books;
  }
}

export default returnedBooksReducer;
