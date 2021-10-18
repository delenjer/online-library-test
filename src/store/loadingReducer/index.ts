import { IAction } from "../../interface/interface";

import { SET_LOADING } from './action';

export const isLoading = (state: boolean) => state;

const loadingReducer = (state = false, action: IAction) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;

    default:
      return state;
  }
}

export default loadingReducer;
