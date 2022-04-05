import { combineReducers, createStore, applyMiddleware } from "redux";
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga'
import { persistStore } from "redux-persist";

// Import Custom Component
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import modalReducer from "./modal";
import demoReducer from "./demo";

const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
    cartlist: cartReducer,
    wishlist: wishlistReducer,
    modal: modalReducer,
    demo: demoReducer
});

export const makeStore = (context) => {
    const store = createStore(
        rootReducers,
        applyMiddleware(sagaMiddleware));

    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.__persistor = persistStore(store);
    return store;
}

export const wrapper = createWrapper(makeStore, { debug: false });