import { IUsers } from '../../interface/interface';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';

export const getUsers = (users: IUsers[]) => ({
    type: GET_USERS,
    users,
});

export const addNewUser = (user: IUsers[]) => ({
    type: ADD_USER,
    user,
});
