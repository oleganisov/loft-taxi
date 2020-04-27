import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
    logoutUser,
} from './actions';

const isLoggedIn = handleActions(
    {
        [loginUserSuccess]: () => true,
        [loginUserFailure]: () => false,
        [registerUserSuccess]: () => true,
        [registerUserFailure]: () => false,
        [logoutUser]: () => false,
    },
    false
);
const error = handleActions(
    {
        [loginUserRequest]: () => null,
        [loginUserFailure]: (_state, action) => action.payload,
        [registerUserRequest]: () => null,
        [registerUserFailure]: (_state, action) => action.payload,
        [logoutUser]: () => null,
    },
    null
);
const token = handleActions(
    {
        [loginUserRequest]: () => null,
        [loginUserSuccess]: (_state, action) => action.payload.token,
        [loginUserFailure]: () => null,
        [registerUserRequest]: () => null,
        [registerUserSuccess]: (_state, action) => action.payload.token,
        [registerUserFailure]: () => null,
        [logoutUser]: () => null,
    },
    null
);
const email = handleActions(
    {
        [loginUserRequest]: () => null,
        [loginUserSuccess]: (_state, action) => action.payload.email,
        [loginUserFailure]: () => null,
        [registerUserRequest]: () => null,
        [registerUserSuccess]: (_state, action) => action.payload.email,
        [registerUserFailure]: () => null,
        [logoutUser]: () => null,
    },
    null
);

export default combineReducers({
    isLoggedIn,
    error,
    token,
    email,
});
