import { IApi } from '../../interface/interface'
export const GET_BORROWED_BOOKS = 'GET_BORROWED_BOOKS';

export const getBorrowedBooks = (books: IApi[]) => ({
  type: GET_BORROWED_BOOKS,
  books,
});
