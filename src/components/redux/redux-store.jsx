import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./users-reducer";


const reducers = combineReducers( {
    usersPage: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;