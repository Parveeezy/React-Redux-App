import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers/counter/counterReducer';
import { userReducer } from './reducers/users/usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    // counter: counterReducer,
    // users: userReducer
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store;