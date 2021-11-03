import { SET_TOKEN } from './action';

export const authentication = (state:any) => state;

const authenticationReducer = (state = false, action: any) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;

    default:
      return state;
  }
}

export default authenticationReducer;
