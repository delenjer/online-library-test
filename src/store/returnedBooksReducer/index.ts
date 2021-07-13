import { IAction } from "../../interface/interface";
import { GET_BOOKS, ADD_BOOK, REMOVE_BOOK } from './action';

export const returnedBooks = (state: any) => state;

const returnedBooksReducer = (books = [], action: IAction) => {
  switch (action.type) {
    case GET_BOOKS:
      const { booksList }:any = action;

      return [...books, ...booksList]
        .filter((book,i,arr) => arr.findIndex(item => (item.id === book.id)) === i);

    case ADD_BOOK:
      const { book }:any = action;

      return [book, ...books];

    case REMOVE_BOOK:

      return books.filter((book:any) => book.id !== action.id);

    default:
      return books;
  }
}

export default returnedBooksReducer;
