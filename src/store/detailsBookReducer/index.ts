import { GET_DETAILS } from './action';

export const bookDetails = (state:any) => state;

const detailsBookReducer = (state = [], action: any) => {
  switch (action.type) {
    case GET_DETAILS:

      return action.data;

    default:
      return state;
  }
}

export default detailsBookReducer;
