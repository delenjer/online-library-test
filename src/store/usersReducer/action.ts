import { IUsers } from '../../interface/interface';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER_LIST = 'EDIT_USER_LIST';
export const REMOVE_USER = 'REMOVE_USER';

export const getUsers = (data: IUsers[]) => ({
    type: GET_USERS,
    data,
});

export const addNewUser = (user: { phone: string; name: string; id: string; username: string; status: string }) => ({
    type: ADD_USER,
    user,
});

export const editUsersLIst = (editValue: IUsers[]) => ({
    type: EDIT_USER_LIST,
    editValue,
});

export const removeUser = (id: string) => ({
    type: REMOVE_USER,
    id,
});
