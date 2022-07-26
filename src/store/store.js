import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./rootReducer";
import watchRootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, thunkMiddleware))
);

sagaMiddleware.run(watchRootSaga);



