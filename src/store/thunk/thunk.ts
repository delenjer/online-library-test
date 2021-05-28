import {
  apiBorrowedBooks,
  apiReturnedBooks,
} from '../../api/api';
import { getActiveBooks } from '../activeBooksReducer/action';

export const loadingBorrowedBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(getActiveBooks(apiBorrowedBooks));
  }
}

export const loadingReturnedBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(getActiveBooks(apiReturnedBooks))
  }
}
