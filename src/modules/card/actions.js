import { createAction } from 'redux-actions';

export const cardRequest = createAction('CARD_REQUEST');
export const cardSuccess = createAction('CARD_SUCCESS');
export const cardFailure = createAction('CARD_FAILURE');
