import { createReducer } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import { ADD_COUNT, GET_COUNT, RESET_COUNT } from '../store/constants';

const initialState = {
    count: 0,
    users: [
        { id: v4(), name: 'Vasya' },
        { id: v4(), name: 'Petya' },
    ],
};

export const increment = createAction({ ADD_COUNT });
export const decrement = createAction({ GET_COUNT });
export const reset = createAction({ RESET_COUNT });

export default createReducer(initialState, {
    [increment]: (state, payload) => {
        state.count = state.count + 1;
    },
    [decrement]: (state, payload) => {
        state.count = state.count - 1;
    },
    [reset]: (state) => {
        state.count = state.count = 0;
    },
});