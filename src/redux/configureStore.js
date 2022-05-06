import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const combineReducer = combineReducers({});

export const store = createStore(combineReducer, applyMiddleware(thunk));
