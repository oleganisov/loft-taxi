import {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} from './actions';

export const authFetchMiddleware = (store) => (next) => (action) => {
    if (action.type === loginUserRequest.toString()) {
        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const { success, token } = json;
                success
                    ? store.dispatch(loginUserSuccess(token))
                    : store.dispatch(loginUserFailure(token));
            })
            .catch((error) => {
                store.dispatch(loginUserFailure(error));
            });
    } else if (action.type === registerUserRequest.toString()) {
        fetch('https://loft-taxi.glitch.me/register', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const { success, token } = json;
                success
                    ? store.dispatch(registerUserSuccess(token))
                    : store.dispatch(registerUserFailure(token));
            })
            .catch((error) => {
                store.dispatch(registerUserFailure(error));
            });
    }
    return next(action);
};
