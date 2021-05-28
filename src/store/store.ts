import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import activeBooksReducer, *as selectorsReturnedBooks from './activeBooksReducer/index';

export const activeBooks = (state: any) =>
  selectorsReturnedBooks.activeBooks(state.activeBooks);

const rootReducer = combineReducers({
  activeBooks: activeBooksReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
