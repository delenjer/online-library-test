import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IState } from "../interface/interface";
import borrowedBooksReducer, *as selectorsBorrowedBooks from './borrowedBooksReducer/index';
import returnedBooksReducer, *as selectorsReturnedBooks from './returnedBooksReducer/index';
import usersReducer, *as selectorsUserData from './usersReducer/index';
import { loadState, saveState } from "./localeStorage/localeStorage";

export const borrowedBooks = (state: IState) =>
  selectorsBorrowedBooks.borrowedBooks(state.borrowedBooks);

export const returnedBooks = (state: IState) =>
  selectorsReturnedBooks.returnedBooks(state.returnedBooks);

export const users = (state: IState) =>
  selectorsUserData.users(state.users);

const persistedState = loadState();

const rootReducer = combineReducers({
  borrowedBooks: borrowedBooksReducer,
  returnedBooks: returnedBooksReducer,
  users: usersReducer,
});

const store = createStore(rootReducer,persistedState, composeWithDevTools(
  applyMiddleware(thunk)
));

store.subscribe(() => {
  saveState({
    // users: store.getState().users,
    borrowedBooks: store.getState().borrowedBooks,
    // returnedBooks: store.getState().returnedBooks,
  });
});

export default store;
