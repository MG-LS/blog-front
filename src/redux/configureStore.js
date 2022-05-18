import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  {imgReducer}  from "./reducers/image";
import auth from "./fearutes/auth";
import {users} from "./fearutes/user";

import  {blogReducer}  from "./reducers/Blog";
import { reviewsReducer } from "./reducers/Review";


const combineReducer = combineReducers({ auth, imgReducer, blogReducer, reviewsReducer, users });

export const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
