import { IBooks } from "../../interface/interface";

export const GET_ACTIVE_BOOKS = 'GET_ACTIVE_BOOKS';
export const ADD_ACTIVE_BOOKS = 'ADD_ACTIVE_BOOKS';

export const getActiveBooks = (books: IBooks[]) => ({
  type: GET_ACTIVE_BOOKS,
  books,
});

export const addBook = (book: IBooks) => ({
  type: ADD_ACTIVE_BOOKS,
  book,
});
