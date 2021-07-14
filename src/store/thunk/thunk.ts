import {
  apiTakenBooksBooks,
  apiReturnedBooks,
  users,
} from '../../api/api';
import { getUsers } from '../usersReducer/action';
import { getReturnedBooks } from "../returnedBooksReducer/action";
import { getTakenBooks } from "../booksTakenUsersReducer/action";

export const loadingTakenBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(getTakenBooks(apiTakenBooksBooks));
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
