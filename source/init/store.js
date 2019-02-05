// Core
import { createStore } from "redux";

// Roots
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

//Enhancer
import { enhansedStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhansedStore);

sagaMiddleware.run(rootSaga);
