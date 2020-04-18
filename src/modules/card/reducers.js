import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    saveCardRequest,
    saveCardSuccess,
    saveCardFailure,
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
} from './actions';

const id = handleActions(
    {
        [saveCardRequest]: () => null,
        [saveCardSuccess]: (_state, action) => action.payload.id,
        [saveCardFailure]: () => null,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: (_state, action) => action.payload.id,
        [fetchCardFailure]: () => null,
    },
    null
);
const cardNumber = handleActions(
    {
        [saveCardRequest]: () => null,
        [saveCardSuccess]: (_state, action) => action.payload.cardNumber,
        [saveCardFailure]: () => null,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: (_state, action) => action.payload.cardNumber,
        [fetchCardFailure]: () => null,
    },
    null
);
const cardName = handleActions(
    {
        [saveCardRequest]: () => null,
        [saveCardSuccess]: (_state, action) => action.payload.cardName,
        [saveCardFailure]: () => null,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: (_state, action) => action.payload.cardName,
        [fetchCardFailure]: () => null,
    },
    null
);
const expiryDate = handleActions(
    {
        [saveCardRequest]: () => null,
        [saveCardSuccess]: (_state, action) => action.payload.expiryDate,
        [saveCardFailure]: () => null,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: (_state, action) => action.payload.expiryDate,
        [fetchCardFailure]: () => null,
    },
    null
);
const cvc = handleActions(
    {
        [saveCardRequest]: () => null,
        [saveCardSuccess]: (_state, action) => action.payload.cvc,
        [saveCardFailure]: () => null,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: (_state, action) => action.payload.cvc,
        [fetchCardFailure]: () => null,
    },
    null
);

const error = handleActions(
    {
        [saveCardRequest]: () => null,
        [saveCardSuccess]: () => null,
        [saveCardFailure]: (_state, action) => action.payload,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: () => null,
        [fetchCardFailure]: (_state, action) => action.payload,
    },
    null
);

export default combineReducers({
    id,
    cardNumber,
    cardName,
    expiryDate,
    cvc,
    error,
});
