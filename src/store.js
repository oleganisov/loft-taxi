import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { rootReducer, rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleWare();

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        loadState(),
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    store.subscribe(() => {
        saveState(store.getState());
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createAppStore;
