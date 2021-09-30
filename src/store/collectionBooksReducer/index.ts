import { GET_COLLECTION_BOOKS } from './action';

export const collectionBooks = (state: any) => state;

const collectionBooksReducer = (state = [], action:any) => {
  switch (action.type) {
    case GET_COLLECTION_BOOKS:
      return action.data;

    default:
      return state;
  }
}

export default collectionBooksReducer;
