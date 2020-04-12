import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { AuthProvider } from '../authContext';

const handlerSignupLinkMock = jest.fn();
const handlerPageMock = jest.fn();

describe('LoginForm', () => {
    let getByText, getByLabelText, getByTestId, debug;
    beforeEach(() => {
        const queries = render(
            <AuthProvider>
                <LoginForm
                    handlerSignupLink={handlerSignupLinkMock}
                    handlerPage={handlerPageMock}
                />
            </AuthProvider>
        );
        getByText = queries.getByText;
        getByLabelText = queries.getByLabelText;
        getByTestId = queries.getByTestId;
        debug = queries.debug;
    });
    afterEach(() => {
        cleanup();
    });

    it('get link register', () => {
        const linkElement = getByText(/^зарегистрируйтесь$/i);

        expect(linkElement).toBeInTheDocument();
    });
    it('get input login', () => {
        const inputElement = getByLabelText(/имя пользователя/i);

        expect(inputElement).toBeInTheDocument();
    });

    it('get input password', () => {
        const inputElement = getByLabelText(/пароль/i);

        expect(inputElement).toBeInTheDocument();
    });

    it('get button submit', () => {
        const buttonElement = getByTestId('login-submit');

        expect(buttonElement).toBeInTheDocument();
    });
    // it('click submit', () => {
    //     const buttonSubmit = getByTestId('login-submit');
    //     const inputUserName = getByLabelText(/имя пользователя/i);
    //     const inputPassword = getByLabelText(/пароль/i);
    //     const onClick = jest.fn();

    //     fireEvent.change(inputUserName, { target: { value: 'user1' } });
    //     fireEvent.change(inputPassword, { target: { value: 'pwd' } });

    //     inputUserName.value = 'user1';
    //     inputPassword.value = 'pwd';
    //     fireEvent.change(inputUserName);
    //     fireEvent.change(inputPassword);
    //     debug();

    //     expect(inputPassword.value).toBe('pwd');
    //     fireEvent.click(buttonSubmit);
    //     expect(onClick).toHaveBeenCalled();
    // });
});
