import { recordSaga } from '../recordSaga';
import * as sagas from './sagas';
import * as api from './api';
import {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} from './actions';

describe('auth', () => {
    describe('login', () => {
        const payload = {
            email: 'john@enterprise.com',
            password: 'enterprise',
            name: 'John',
            surname: 'Dow',
        };
        const error = new Error('Something went wrong');
        api.loginAuth = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('login success', async () => {
            const result = { success: true, token: 'recd6LsCFED9hoBnN' };
            api.loginAuth.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.loginAuth,
                loginUserRequest(payload)
            );

            expect(api.loginAuth).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(
                loginUserSuccess({ token: result.token, email: payload.email })
            );
        });

        it('login failed', async () => {
            api.loginAuth.mockImplementation(() => {
                throw error;
            });

            const dispatched = await recordSaga(
                sagas.loginAuth,
                loginUserRequest(payload)
            );

            expect(api.loginAuth).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(loginUserFailure(error));
        });
    });
    describe('register', () => {
        const payload = {
            email: 'john@enterprise.com',
            password: 'enterprise',
        };
        const error = new Error('Something went wrong');
        api.registerAuth = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('register success', async () => {
            const result = { success: true, token: 'recd6LsCFED9hoBnN' };
            api.registerAuth.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.registerAuth,
                registerUserRequest(payload)
            );

            expect(api.registerAuth).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(
                registerUserSuccess({
                    token: result.token,
                    email: payload.email,
                })
            );
        });

        it('register failed', async () => {
            api.registerAuth.mockImplementation(() => {
                throw error;
            });

            const dispatched = await recordSaga(
                sagas.registerAuth,
                registerUserRequest(payload)
            );

            expect(api.registerAuth).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(registerUserFailure(error));
        });
    });
});
