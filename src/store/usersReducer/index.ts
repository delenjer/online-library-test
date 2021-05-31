import { GET_USERS, ADD_USER } from './action';

export const users = (state:any) => state;

const usersReducer = (users = [], action:any) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;

    case ADD_USER:
      return [action.user, ...users];

    default:
      return users;
  }
}

export default usersReducer;
