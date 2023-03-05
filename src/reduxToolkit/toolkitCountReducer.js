import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const reset = createAction('RESET');

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
});