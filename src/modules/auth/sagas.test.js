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
            const result = { success: false, error: 'Something went wrong' };
            api.loginAuth.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.loginAuth,
                loginUserRequest(payload)
            );

            expect(api.loginAuth).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(loginUserFailure(result.error));
        });
    });
    describe('register', () => {
        const payload = {
            email: 'john@enterprise.com',
            password: 'enterprise',
        };
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
            const result = { success: false, error: 'Something went wrong' };
            api.registerAuth.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.registerAuth,
                registerUserRequest(payload)
            );

            expect(api.registerAuth).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(
                registerUserFailure(result.error)
            );
        });
    });
});
