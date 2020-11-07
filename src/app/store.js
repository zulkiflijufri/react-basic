import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gridReducer from "../features/Grid/reducer";

let rootReducer = combineReducers({
    grid: gridReducer,
});

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
