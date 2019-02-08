// Core
import { applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";

// Middleware
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { customThunk } from "./custom";
import createSagaMiddleware from "redux-saga";

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => "#139bfe",
        prevState: () => "#1c5faf",
        action:    () => "#149945",
        nextState: () => "#a47104",
        error:     () => "#ff0005",
    },
});

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, customThunk, routerMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enhansedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhansedStore, sagaMiddleware, history };
