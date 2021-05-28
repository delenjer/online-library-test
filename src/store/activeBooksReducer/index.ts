import { GET_ACTIVE_BOOKS, ADD_ACTIVE_BOOKS } from './action';

export const activeBooks = (state: any) => state;

const activeBooksReducer = (books = [], action: any) => {
  switch (action.type) {
    case GET_ACTIVE_BOOKS:
      return action.books;

    case ADD_ACTIVE_BOOKS:
      return [action.book, ...books];

    default:
      return books;
  }
}

export default activeBooksReducer;
