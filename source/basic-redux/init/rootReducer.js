// Core
import { combineReducers } from "redux";

//combineReducers
import { galleryReducer } from "../bus/gallery/reducer";

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
