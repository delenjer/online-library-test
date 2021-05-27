import {
  apiBorrowedBooks,
  apiReturnedBooks,
  // getStorageData,
  // sentReturnedBooks,
} from '../../api/api';
import { getBorrowedBooks } from '../borrowedBooksReducer/action';
import { getReturnedBooks } from '../returnedBooksReducer/action';
const getStorageData = JSON.parse(localStorage.getItem("returnedBooks") as string) || '';

export const loadingBorrowedBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(getBorrowedBooks(apiBorrowedBooks));
  }
}

export const loadingReturnedBooks = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    // !getStorageData.length ? dispatch(getReturnedBooks(apiReturnedBooks)) : dispatch(getReturnedBooks(getStorageData))
    dispatch(getReturnedBooks(apiReturnedBooks))
  }
}

// export const sentReturnedBooksToStorage = (data:any) => {
//   return sentReturnedBooks(data);
// }
