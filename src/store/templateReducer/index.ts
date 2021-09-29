// @ts-ignore
import { SET_RESTAURANT } from './action';

// @ts-ignore
export const selector = (state) => state;

const funcReducer = (initialState = [], action: { type: any; }) => {
  switch (action.type) {
    case SET_RESTAURANT:

      return initialState;

    default:
      return initialState;
  }
}

export default funcReducer;
