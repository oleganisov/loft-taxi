import { takeLatest, put, call } from 'redux-saga/effects';
import {
    getRouteRequest,
    getRouteSuccess,
    getRouteFailure,
    getAddressListRequest,
    getAddressListSuccess,
    getAddressListFailure,
} from './actions';
import * as api from './api';

export default function* watcher() {
    yield takeLatest(getAddressListRequest, getAddressList);
    yield takeLatest(getRouteRequest, getRoute);
}

function* getAddressList() {
    try {
        const result = yield call(api.getAddressList);
        const { addresses } = result;
        yield put(getAddressListSuccess(addresses));
    } catch (error) {
        yield put(getAddressListFailure(error));
    }
}

function* getRoute(action) {
    try {
        const result = yield call(api.getRoute, action.payload);
        const { address1, address2 } = action.payload;

        yield put(getRouteSuccess({ address1, address2, coordinates: result }));
    } catch (error) {
        yield put(getRouteFailure(error));
    }
}
