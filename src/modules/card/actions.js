import { createAction } from 'redux-actions';

export const saveCardRequest = createAction('SAVE_CARD_REQUEST');
export const saveCardSuccess = createAction('SAVE_CARD_SUCCESS');
export const saveCardFailure = createAction('SAVE_CARD_FAILURE');

export const fetchCardRequest = createAction('FETCH_CARD_REQUEST');
export const fetchCardSuccess = createAction('FETCH_CARD_SUCCESS');
export const fetchCardFailure = createAction('FETCH_CARD_FAILURE');
