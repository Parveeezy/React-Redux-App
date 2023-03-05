import { v4 } from 'uuid';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: v4(), name: 'Vasya' },
        { id: v4(), name: 'Petya' },
    ],
};

export const addUser = createAction('ADD_USER');
export const getUser = createAction('GET_USER');
export const addManyUser = createAction('ADD_MANY_USERS');

export const fetchUsers = () => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>dispatch(addManyUser(json)));

    };
};

export const toolkitUsersReducer = createReducer(initialState, {
    [addUser]: (state, action) => {
        return { ...state, users: [...state.users, { id: v4(), name: action.payload }] };
    },
    [getUser]: (state, action) => {
        return { ...state, users: state.users.filter(u => u.id !== action.payload) };
    },
    [addManyUser]: (state, action) => {
        return {
            ...state, users: [...state.users, ...action.payload],
        };
    },
});