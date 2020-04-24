import reducers from './reducers';
import {
    // loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    // registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} from './actions';

describe('auth reducers', () => {
    const initialState = {
        isLoggedIn: false,
        error: null,
        token: null,
        email: null,
    };
    const authState = {
        isLoggedIn: true,
        token: 'recd6LsCFED9hoBnN',
        email: 'john@enterprise.com',
        error: null,
    };
    const payload = {
        token: 'recd6LsCFED9hoBnN',
        email: 'john@enterprise.com',
    };
    const error = 'Something went wrong';

    it('login', () => {
        expect(reducers(initialState, loginUserSuccess(payload))).toEqual(
            authState
        );
    });
    it('login failure', () => {
        expect(reducers(initialState, loginUserFailure(error))).toEqual({
            ...initialState,
            error: 'Something went wrong',
        });
    });
    it('register', () => {
        expect(reducers(initialState, registerUserSuccess(payload))).toEqual(
            authState
        );
    });
    it('register failure', () => {
        expect(reducers(initialState, registerUserFailure(error))).toEqual({
            ...initialState,
            error: 'Something went wrong',
        });
    });
});
