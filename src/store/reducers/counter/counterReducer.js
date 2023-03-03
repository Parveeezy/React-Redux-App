import {ADD_COUNT, GET_COUNT, RESET_COUNT} from "../../constants";

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COUNT:
            return {...state, count: state.count + action.payload}
        case GET_COUNT:
            return {...state, count: state.count - action.payload}
        case RESET_COUNT:
            return {...state, count: state.count = 0}
        default:
            return state
    }
};