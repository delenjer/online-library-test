import { IUsers } from '../../interface/interface';

export const GET_USERS = 'GET_USERS';

export const getUsers = (users: ({ phone: string; name: string; id: number; username: string; status: string } | { phone: string; name: string; id: number; completed: string; username: string })[]) => ({
    type: GET_USERS,
    users,
});
