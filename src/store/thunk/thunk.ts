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
import { getCollectionBooks } from '../collectionBooksReducer/action';
import { getDetails } from '../detailsBookReducer/action';
import { setLoading } from '../loadingReducer/action';

export const loadingCollectionBooks = (countPage:number) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoading(true));

    collectionBooksApi(countPage)
      .then(async data => {
        dispatch(await getCollectionBooks(data && data.data.artObjects));

        dispatch(setLoading(false));
      }).catch(() => {
      dispatch(getCollectionBooks([]));
    });
  }
}

export const loadingDetailsBook = (id:string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    detailsBookApi(id)
      .then(async (data:any) => {
        dispatch(await getDetails(data && data.data.artObject));
      }).catch(() => {
      dispatch(getDetails([]));
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
