import { takeLatest, put, call } from 'redux-saga/effects';
import {
    saveCardRequest,
    saveCardFailure,
    saveCardSuccess,
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
} from './actions';
import * as api from './api';

export default function* watcher() {
    yield takeLatest(saveCardRequest, saveCard);
    yield takeLatest(fetchCardRequest, fetchCard);
}

function* saveCard(action) {
    try {
        const result = yield call(api.saveCard, action.payload);
        const { success, error } = result;
        const { cardNumber, expiryDate, cardName, cvc } = action.payload;

        success
            ? yield put(
                  saveCardSuccess({
                      cardNumber,
                      expiryDate,
                      cardName,
                      cvc,
                  })
              )
            : yield put(saveCardFailure(error));
    } catch (error) {
        yield put(saveCardFailure(error));
    }
}

function* fetchCard(action) {
    try {
        const result = yield call(api.fetchCard, action.payload);

        yield put(fetchCardSuccess(result));
    } catch (error) {
        yield put(fetchCardFailure(error));
    }
}
