import { ADD_COUNT, GET_COUNT, RESET_COUNT } from '../../constants';

export const addCounter = (num) => ({ type: ADD_COUNT, payload: num });
export const getCounter = (num) => ({ type: GET_COUNT, payload: num });
export const resetCounter = () => ({ type: RESET_COUNT});
