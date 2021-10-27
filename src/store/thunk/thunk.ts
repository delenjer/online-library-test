import {
  apiTakenBooksBooks,
  apiReturnedBooks,
  users,
  collectionBooksApi,
  detailsBookApi,
} from '../../api/api';

import { getUsers } from '../usersReducer/action';
import { getReturnedBooks } from "../returnedBooksReducer/action";
import { getTakenBooks } from "../booksTakenUsersReducer/action";
import { getCollectionBooks, setLoadingBooks } from '../collectionBooksReducer/action';
import { getDetails, setLoadingDetails } from '../detailsBookReducer/action';

export const loadingCollectionBooks = (countPage:number) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingBooks(true));

    collectionBooksApi(countPage)
      .then(async data => {
        dispatch(await getCollectionBooks(data && data.data.artObjects));

        dispatch(setLoadingBooks(false));
      }).catch(() => {
      dispatch(getCollectionBooks([]));
      dispatch(setLoadingBooks(false));
    });
  }
}

export const loadingDetailsBook = (id:string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingDetails(true));

    detailsBookApi(id)
      .then(async (data:any) => {
        dispatch(await getDetails(data && data.data.artObject));

        dispatch(setLoadingDetails(false));
      }).catch(() => {
      dispatch(getDetails({}));
      dispatch(setLoadingDetails(false));
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
    dispatch(getReturnedBooks(apiReturnedBooks))
  }
}

export const loadingUsers = () => {
  return (dispatch: (arg: any) => void) => {
    dispatch(getUsers(users));
  }
}
