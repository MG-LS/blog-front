import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { applicationReducer } from "./reducers/application";

const combineReducer = combineReducers({ applicationReducer });

export const store = createStore(combineReducer, applyMiddleware(thunk));
