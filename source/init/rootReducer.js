// Core
import { combineReducers } from "redux";

//combineReducers
import { postsReducer as posts } from "../bus/posts/reducer"
import { authReducer as auth } from "../bus/auth/reducer"
import { uiReducer as ui } from "../bus/ui/reducer";
import { profileReducer as profile } from "../bus/profile/reducer";

export const rootReducer = combineReducers({
    posts,
    auth,
    ui,
    profile,
});
