import { v4 } from 'uuid';
import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {
    count: 0,
    users: [
        { id: v4(), name: 'Vasya' },
        { id: v4(), name: 'Petya' },
    ],
};

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const reset = createAction('RESET');
export const addUser = createAction('ADD_USER');
export const getUser = createAction('GET_USER');

export const toolkitCounterReducer = createReducer(initialState, {
    [increment]: (state, action) => {
        state.count = state.count + action.payload;
        console.log(state);
    },
    [decrement]: (state, action) => {
        state.count = state.count - action.payload;
    },
    [reset]: (state) => {
        state.count = state.count = 0;
    },
    [addUser]: (state, action) => {
            return {...state, users: {...state.users,
        {
            id: v4(), name;
        :
            action.payload,
        }}}
    }
});