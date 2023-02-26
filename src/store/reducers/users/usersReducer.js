import {v4} from 'uuid';
import {ADD_USER, GET_USER} from "../../constants";

const initialState = {
    users: [
        {id: v4(), name: 'Vasya'},
        {id: v4(), name: 'Petya'},
    ]
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return {...state, users: [...state.users, {id: v4(), name: action.payload}]}
        case GET_USER:
            return {...state, users: state.users.filter(u => u.id !== action.payload)};
        default:
            return state;
    }
}