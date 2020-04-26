import React from 'react';
import {
    render,
    cleanup,
    fireEvent,
    waitFor,
    screen,
} from '@testing-library/react';
import LoginForm from './LoginForm';
import createStore from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore();

describe('LoginForm', () => {
    const loginUserRequestMock = jest.fn();
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <LoginForm loginUserRequest={loginUserRequestMock} />
                </Provider>
            </BrowserRouter>
        );
    });
    afterEach(() => {
        cleanup();
    });
    it('get link register', () => {
        const linkElement = screen.getByText(/^зарегистрируйтесь$/i);

        expect(linkElement).toBeInTheDocument();
    });
    it('Username input changes', () => {
        const inputUserName = screen.getByLabelText(/имя пользователя/i);

        fireEvent.change(inputUserName, {
            target: { value: 'user3@domain.com' },
        });
        expect(inputUserName.value).toBe('user3@domain.com');
    });
    it('submit login form', async () => {
        fireEvent.submit(screen.getByTestId('login-form'), {
            target: { username: 'user3@domain.com', password: 'user3' },
        });
        // Wait for appearance
        await waitFor(() =>
            expect(screen.getByTestId('login-form')).toBeFalsy()
        );
        // await waitFor(() => expect(getByTestId('page-map')).toBeTruthy());
    });
});
