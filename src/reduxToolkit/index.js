import {  combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { toolkitCounterReducer } from './toolkitCountReducer';
import { toolkitUsersReducer } from './toolkitUsersReducer';


const rootStore = combineReducers({
    toolkitCount: toolkitCounterReducer,
    toolkitUsers: toolkitUsersReducer
})

export const store = configureStore({
    reducer: rootStore
})