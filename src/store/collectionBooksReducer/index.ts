import { GET_COLLECTION_BOOKS } from './action';

export const collectionBooks = (state: any) => state;

const collectionBooksReducer = (state = [], action:any) => {
  switch (action.type) {
    case GET_COLLECTION_BOOKS:
      console.log(action.data);

      return [...state, action.data];

    default:
      return state;
  }
}

export default collectionBooksReducer;
