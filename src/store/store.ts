import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import activeBooksReducer, *as selectorsReturnedBooks from './activeBooksReducer/index';
import usersReducer, *as selectorsUserData from './usersReducer/index';

export const activeBooks = (state: any) =>
  selectorsReturnedBooks.activeBooks(state.activeBooks);

export const users = (state: any) =>
  selectorsUserData.users(state.users);

const rootReducer = combineReducers({
  activeBooks: activeBooksReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
