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
import { getAddressList } from '../route/sagas';

export default function* watcher() {
    yield takeLatest(loginUserRequest, loginAuth);
    yield takeLatest(registerUserRequest, registerAuth);
}

export function* loginAuth(action) {
    try {
        const result = yield call(api.loginAuth, action.payload);
        const { success, token, error } = result;
        const email = action.payload.email;

        if (success) {
            yield put(loginUserSuccess({ token, email }));

            yield fork(fetchCard, { payload: token });
            yield fork(getAddressList);
        } else {
            yield put(loginUserFailure(error));
        }
    } catch (error) {
        yield put(loginUserFailure(error));
    }
}

export function* registerAuth(action) {
    try {
        const result = yield call(api.registerAuth, action.payload);
        const { success, token, error } = result;
        const email = action.payload.email;

        if (success) {
            yield put(registerUserSuccess({ token, email }));

            yield fork(getAddressList);
        } else {
            yield put(registerUserFailure(error));
        }
    } catch (error) {
        yield put(registerUserFailure(error));
    }
}
