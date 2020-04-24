import { takeLatest, put, call, fork } from 'redux-saga/effects';
import {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} from './actions';
import * as api from './api';
import { fetchCard } from '../card/sagas';

export default function* watcher() {
    yield takeLatest(loginUserRequest, loginAuth);
    yield takeLatest(registerUserRequest, registerAuth);
}

function* loginAuth(action) {
    try {
        const result = yield call(api.loginAuth, action.payload);
        const { success, token, error } = result;
        const email = action.payload.email;

        if (success) {
            yield put(loginUserSuccess({ token, email }));

            yield fork(fetchCard, { payload: token });
        } else {
            yield put(loginUserFailure(error));
        }
    } catch (error) {
        yield put(loginUserFailure(error));
    }
}

function* registerAuth(action) {
    try {
        const result = yield call(api.registerAuth, action.payload);
        const { success, token, error } = result;
        const email = action.payload.email;

        if (success) {
            yield put(registerUserSuccess({ token, email }));
        } else {
            yield put(registerUserFailure(error));
        }
    } catch (error) {
        yield put(registerUserFailure(error));
    }
}
