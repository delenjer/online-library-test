import { IAction } from '../../interface/interface';
import { GET_USERS, ADD_USER, EDIT_USER_LIST, REMOVE_USER } from './action';

export const users = (state:any) => state;

const usersReducer = (users = [], action:IAction) => {
  switch (action.type) {
    case GET_USERS:
      const { data } = action

      // @ts-ignore
      return [...users, ...data].filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i);

    case ADD_USER:
      return [action.user, ...users];

    case EDIT_USER_LIST:
      return [...users, action.editValue];

    case REMOVE_USER:

      return users.filter((user:any) => user.id !== action.id);

    default:
      return users;
  }
}

export default usersReducer;
