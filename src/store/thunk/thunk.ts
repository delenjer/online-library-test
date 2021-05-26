import {
  apiBorrowedBooks,
  apiReturnedBooks
} from '../../api/api';
import { getBorrowedBooks } from '../borrowedBooksReducer/action';
import { getReturnedBooks } from '../returnedBooksReducer/action';

export const loadingBorrowedBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(getBorrowedBooks(apiBorrowedBooks));
  }
}

export const loadingReturnedBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(getReturnedBooks(apiReturnedBooks));
  }
}
