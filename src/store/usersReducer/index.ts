import { GET_USERS } from './action';

const usersReducer = (users = [], action:any) => {
  switch (action.type) {
    case GET_USERS:
      return [...users, action.users];

    default:
      return users;
  }
}

