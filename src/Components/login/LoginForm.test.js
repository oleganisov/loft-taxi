import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { AuthProvider } from '../authContext';

describe('LoginForm', () => {
    const handlerPageMock = jest.fn();
    let getByText, getByLabelText, getByTestId;
    beforeEach(() => {
        const queries = render(
            <AuthProvider>
                <LoginForm handlerPage={handlerPageMock} />
            </AuthProvider>
        );

        getByText = queries.getByText;
        getByLabelText = queries.getByLabelText;
        getByTestId = queries.getByTestId;
    });
    afterEach(() => {
        cleanup();
    });

    it('get link register', () => {
        const linkElement = getByText(/^зарегистрируйтесь$/i);

        expect(linkElement).toBeInTheDocument();
    });
    it('Username input changes', () => {
        const inputUserName = getByLabelText(/имя пользователя/i);

        fireEvent.change(inputUserName, { target: { value: 'user1' } });
        expect(inputUserName.value).toBe('user1');
    });
    it('click submit', () => {
        const inputUserName = getByLabelText(/имя пользователя/i);
        const inputPassword = getByLabelText(/пароль/i);

        fireEvent.change(inputUserName, { target: { value: 'user1' } });
        fireEvent.change(inputPassword, { target: { value: 'pwd' } });
        fireEvent.click(getByTestId('login-submit'));
        expect(handlerPageMock).toHaveBeenCalled();
    });
});
