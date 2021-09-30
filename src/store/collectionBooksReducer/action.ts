export const GET_COLLECTION_BOOKS = 'GET_COLLECTION_BOOKS';

export const getCollectionBooks = (data:any) => {
  return {
    type: GET_COLLECTION_BOOKS,
    data,
  }
};
