import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import borrowedBooksReducer, *as selectorsBorrowedBooks from './borrowedBooksReducer/index';
import returnedBooksReducer, *as selectorsReturnedBooks from './returnedBooksReducer/index';

export const borrowedBooks = (state: any) => selectorsBorrowedBooks
  .borrowedBooks(state.borrowedBooks);

export const returnedBooks = (state: any) => selectorsReturnedBooks
  .returnedBooks(state.returnedBooks);

const rootReducer = combineReducers({
  borrowedBooks: borrowedBooksReducer,
  returnedBooks: returnedBooksReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
