import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { toolkitCounterReducer } from './toolkitReducer';

const rootStore = combineReducers({
    toolkitCount: toolkitCounterReducer
})

export const store = configureStore({
    reducer: rootStore
})