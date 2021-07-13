import {
  apiBorrowedBooks,
  apiReturnedBooks,
  users,
} from '../../api/api';
import { getBorrowedBooks } from '../borrowedBooksReducer/action';
import { getUsers } from '../usersReducer/action';
import { getReturnedBooks } from "../returnedBooksReducer/action";

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

export const loadingUsers = () => {
  return (dispatch: (arg: any) => void) => {
    dispatch(getUsers(users));
  }
}
