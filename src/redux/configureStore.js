import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  {imgReducer}  from "./reducers/image";
import auth from "./fearutes/auth";

const combineReducer = combineReducers({ auth, imgReducer });

export const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
