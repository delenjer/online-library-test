import {
  apiTakenBooksBooks,
  apiReturnedBooks,
  users,
  collectionBooksApi,
} from '../../api/api';

import { getUsers } from '../usersReducer/action';
import { getReturnedBooks } from "../returnedBooksReducer/action";
import { getTakenBooks } from "../booksTakenUsersReducer/action";
import { getCollectionBooks } from '../collectionBooksReducer/action';

export const loadingCollectionBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    collectionBooksApi()
      .then(async data => {
        dispatch(await getCollectionBooks(data && data.data.artObjects));
      }).catch(() => {
      dispatch(getCollectionBooks({}));
    });
  }
}

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
