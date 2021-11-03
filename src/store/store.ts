import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect'

import { IState } from "../interface/interface";
import returnedBooksReducer, *as selectorsReturnedBooks from './returnedBooksReducer/index';
import usersReducer, *as selectorsUserData from './usersReducer/index';
import booksTakenUsersReducer, *as selectorsTakenBooks from './booksTakenUsersReducer/index';
import calendarEventsReducer, *as selectorCalendarEvents from './calendarReducer/index';
import collectionBooksReducer, *as selectorCollectionBooks from './collectionBooksReducer/index';
import detailsBookReducer, *as selectorDetailsBook from './detailsBookReducer/index';
import authenticationReducer, *as selectorAuthentication from './authenticationReducer/index';
import { loadState, saveState } from "./localeStorage/localeStorage";

const collectionBooks = (state: IState) => selectorCollectionBooks.collectionBooks(state.collectionBooks);

const bookDetails = (state: IState) => selectorDetailsBook.bookDetails(state.bookDetails);

export const collectionBooksMemo = createSelector(collectionBooks, (collectionBooks) => collectionBooks);

export const bookDetailsMemo = createSelector(bookDetails, (bookDetails) => bookDetails);

export const returnedBooks = (state: IState) => selectorsReturnedBooks.returnedBooks(state.returnedBooks);

export const calendarEvents = (state:any) => selectorCalendarEvents.calendarEvents(state.calendarEvents);

export const users = (state: IState) => selectorsUserData.users(state.users);

export const authentication = (state: any) => selectorAuthentication.authentication(state.authentication);

export const booksTakenUsers = (state: IState) =>
  selectorsTakenBooks.booksTakenUsers(state.booksTakenUsers);

const persistedState = loadState();

const rootReducer = combineReducers({
  returnedBooks: returnedBooksReducer,
  users: usersReducer,
  booksTakenUsers: booksTakenUsersReducer,
  calendarEvents: calendarEventsReducer,
  collectionBooks: collectionBooksReducer,
  bookDetails: detailsBookReducer,
  authentication: authenticationReducer,
});

const store = createStore(rootReducer, persistedState, composeWithDevTools(
  applyMiddleware(thunk)
));

store.subscribe(() => {
  saveState({
    booksTakenUsers: store.getState().booksTakenUsers,
    users: store.getState().users,
    returnedBooks: store.getState().returnedBooks,
    authentication: store.getState().authentication,
  });
});

export default store;
