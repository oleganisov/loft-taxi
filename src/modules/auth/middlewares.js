import {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} from './actions';

export const authFetchMiddleware = (store) => (next) => (action) => {
    const BASE_URL = 'https://loft-taxi.glitch.me/';

    if (action.type === loginUserRequest.toString()) {
        fetch(`${BASE_URL}/auth`, {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const { success, token, error } = json;
                const email = action.payload.email;

                if (success) {
                    store.dispatch(loginUserSuccess({ token, email }));
                } else {
                    store.dispatch(loginUserFailure(error));
                }
            })
            .catch((error) => {
                store.dispatch(loginUserFailure(error));
            });
    }
    if (action.type === registerUserRequest.toString()) {
        fetch(`${BASE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const { success, token, error } = json;
                const email = action.payload.email;

                if (success) {
                    store.dispatch(registerUserSuccess({ token, email }));
                } else {
                    store.dispatch(registerUserFailure(error));
                }
            })
            .catch((error) => {
                store.dispatch(registerUserFailure(error));
            });
    }
    return next(action);
};
