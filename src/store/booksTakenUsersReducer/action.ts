import { IAddTakenBook, IBooks } from "../../interface/interface";

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'GET_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const getTakenBooks = (booksList:IBooks[]) => ({
  type: GET_BOOKS,
  booksList,
});

export const addTakenBook = (book:IAddTakenBook) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id:string) => ({
  type: REMOVE_BOOK,
  id,
});
