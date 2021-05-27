export const GET_RETURNED_BOOKS = 'SET_RESTAURANT';
export const ADD_BOOK = 'ADD_BOOK';

export const getReturnedBooks = (books: any) => ({
  type: GET_RETURNED_BOOKS,
  books,
});

export const addBook = (book: any) => ({
  type: ADD_BOOK,
  book,
});
