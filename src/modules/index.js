import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { reducers as authReducers, sagas as authSagas } from './auth';
import { reducers as cardReducers, sagas as cardSagas } from './card';

const rootReducer = combineReducers({
    auth: authReducers,
    card: cardReducers,
});

function* rootSaga() {
    yield fork(authSagas);
    yield fork(cardSagas);
}

export { rootReducer, rootSaga };
