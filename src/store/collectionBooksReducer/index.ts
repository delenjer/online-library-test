import { GET_COLLECTION_BOOKS, SET_LOADING_BOOKS } from './action';

export const collectionBooks = (state: any) => state;

const initialState = {
  collectionBooks: [],
  isLoading: false,
}

const collectionBooksReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GET_COLLECTION_BOOKS:
      return {...state, collectionBooks: action.data};

    case SET_LOADING_BOOKS:
      return {...state, isLoading: action.payload};

    default:
      return state;
  }
}

export default collectionBooksReducer;
