// Core
import { combineReducers } from "redux";

//combineReducers
import { postsReducer as posts } from "../bus/posts/reducer";

export const rootReducer = combineReducers({
    posts,
});
