import {ADD_USER, GET_USER} from "../../constants";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const getUser = (id) => {
    return {
        type: GET_USER,
        payload: id
    }
}