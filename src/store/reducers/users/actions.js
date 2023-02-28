import { ADD_USER, GET_USER } from '../../constants';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const getUser = (id) => ({ type: GET_USER, payload: id });