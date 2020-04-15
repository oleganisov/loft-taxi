import { createStore, compose, applyMiddleware } from 'redux';
import { authFetchMiddleware } from './modules/auth';
import rootReducer from './modules';

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(authFetchMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    return store;
};

export default createAppStore;
