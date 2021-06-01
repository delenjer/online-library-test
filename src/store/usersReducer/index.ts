import { GET_USERS, ADD_USER, EDIT_USER_LIST } from './action';

export const users = (state:any) => state;

const usersReducer = (users = [], action:any) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;

    case ADD_USER:
      return [action.user, ...users];

    case EDIT_USER_LIST:
      return [...users, action.editValue];

    default:
      return users;
  }
}

export default usersReducer;
