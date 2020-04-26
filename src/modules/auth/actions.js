import { createAction } from 'redux-actions';

export const loginUserRequest = createAction('LOGIN_USER_REQUEST');
export const loginUserSuccess = createAction('LOGIN_USER_SUCCESS');
export const loginUserFailure = createAction('LOGIN_USER_FAILURE');

export const registerUserRequest = createAction('REGISTER_USER_REQUEST');
export const registerUserSuccess = createAction('REGISTER_USER_SUCCESS');
export const registerUserFailure = createAction('REGISTER_USER_FAILURE');

export const logoutUser = createAction('LOGOUT_USER');
