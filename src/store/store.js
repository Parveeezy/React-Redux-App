import {combineReducers, createStore} from "redux";
import counterReducer from "./reducers/counter/counterReducer";
import {userReducer} from "./reducers/users/usersReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer
})

const store = createStore(rootReducer)

export default store;