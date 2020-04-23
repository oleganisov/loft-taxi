import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { reducers as authReducers, sagas as authSagas } from './auth';
import { reducers as cardReducers, sagas as cardSagas } from './card';
import { reducers as routeReducers, sagas as routeSagas } from './route';

const rootReducer = combineReducers({
    auth: authReducers,
    card: cardReducers,
    route: routeReducers,
});

function* rootSaga() {
    yield fork(authSagas);
    yield fork(cardSagas);
    yield fork(routeSagas);
}

export { rootReducer, rootSaga };
