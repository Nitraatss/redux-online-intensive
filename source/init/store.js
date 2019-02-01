// Core
import { createStore } from "redux";

// Reducer
import { rootReducer } from "./rootReducer";

//Enhancer
import { enhansedStore } from "./middleware/core";

export const store = createStore(rootReducer, enhansedStore);
