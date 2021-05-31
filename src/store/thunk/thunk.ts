import {
  apiBorrowedBooks,
  apiReturnedBooks,
  users,
} from '../../api/api';
import { getActiveBooks } from '../activeBooksReducer/action';
import { getUsers } from '../usersReducer/action';

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

export const loadingUsers = () => {
  return (dispatch: (arg: any) => void) => {
    dispatch(getUsers(users))
  }
}
