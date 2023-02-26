import {ADD_COUNT, GET_COUNT, RESET_COUNT} from "../../constants";

export const addCounter = (num) => {
    return {
        type: ADD_COUNT,
        payload: num
    }
};

export const getCounter = (num) => {
    return {
        type: GET_COUNT,
        payload: num
    }
};

export const resetCounter = () => {
    return {
        type: RESET_COUNT,
    }
};
