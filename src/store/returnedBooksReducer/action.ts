export const GET_RETURNED_BOOKS = 'SET_RESTAURANT';

export const getReturnedBooks = (books: any) => ({
  type: GET_RETURNED_BOOKS,
  books,
})
