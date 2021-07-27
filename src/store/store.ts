import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect'

import { IState } from "../interface/interface";
import returnedBooksReducer, *as selectorsReturnedBooks from './returnedBooksReducer/index';
import usersReducer, *as selectorsUserData from './usersReducer/index';
import booksTakenUsersReducer, *as selectorsTakenBooks from './booksTakenUsersReducer/index';
import calendarEventsReducer, *as selectorCalendarEvents from './calendarReducer/index';
import { loadState, saveState } from "./localeStorage/localeStorage";

export const returnedBooks = (state: IState) => selectorsReturnedBooks.returnedBooks(state.returnedBooks);

export const calendarEvents = (state:any) => selectorCalendarEvents.calendarEvents(state.calendarEvents);

const users = (state: IState) => selectorsUserData.users(state.users);

export const usersMemo = createSelector(
  users,
  (users) => {
    if (!users) {
      return [];
    }

    return users;
  }
);

export const booksTakenUsers = (state: IState) =>
  selectorsTakenBooks.booksTakenUsers(state.booksTakenUsers);

const persistedState = loadState();

const rootReducer = combineReducers({
  returnedBooks: returnedBooksReducer,
  users: usersReducer,
  booksTakenUsers: booksTakenUsersReducer,
  calendarEvents: calendarEventsReducer,
});

const store = createStore(rootReducer, persistedState, composeWithDevTools(
  applyMiddleware(thunk)
));

store.subscribe(() => {
  saveState({
    booksTakenUsers: store.getState().booksTakenUsers,
    users: store.getState().users,
    returnedBooks: store.getState().returnedBooks,
  });
});

export default store;
