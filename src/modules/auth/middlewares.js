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
                const { success, token, error } = json;
                const email = action.payload.email;

                if (success) {
                    store.dispatch(loginUserSuccess({ token, email }));
                    localStorage.setItem('token', token);
                    localStorage.setItem('email', email);
                    localStorage.setItem('isLoggedIn', 'true');
                } else {
                    store.dispatch(loginUserFailure(error));
                }
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
                const { success, token, error } = json;
                const email = action.payload.email;

                if (success) {
                    store.dispatch(registerUserSuccess({ token, email }));
                    localStorage.setItem('token', token);
                    localStorage.setItem('email', email);
                    localStorage.setItem('isLoggedIn', 'true');
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
