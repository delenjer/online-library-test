import { GET_DETAILS, SET_LOADING_DETAILS } from './action';
import { IBookDetails } from "../../interface/interface";

export const bookDetails = (state:IBookDetails) => state;

const initialState = {
  bookDetails: {},
  isLoading: false,
}

const detailsBookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DETAILS:
      return {...state, bookDetails: action.data};

    case SET_LOADING_DETAILS:
      return {...state, isLoading: action.payload};

    default:
      return state;
  }
}

export default detailsBookReducer;
