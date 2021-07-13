import { IBooks } from "../../interface/interface";

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const getReturnedBooks = (booksList: IBooks[]) => ({
  type: GET_BOOKS,
  booksList,
});

export const addReturnedBook = (book: IBooks) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id: string) => ({
  type: REMOVE_BOOK,
  id,
});
