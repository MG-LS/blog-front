import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  {imgReducer}  from "./reducers/image";
import auth from "./fearutes/auth";
import  {blogReducer}  from "./reducers/Blog";
import  {commentsReducer}  from "./reducers/CommentBlog";



const combineReducer = combineReducers({ auth, imgReducer, blogReducer, commentsReducer });

export const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
