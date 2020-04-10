import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

const handlerSignupLinkMock = jest.fn();
const handlerNavigationMock = jest.fn();

describe('LoginForm', () => {
    let getByText, getByLabelText, getByTestId;
    beforeEach(() => {
        const queries = render(
            <LoginForm
                handlerSignupLink={handlerSignupLinkMock}
                handlerNavigation={handlerNavigationMock}
            />
        );
        getByText = queries.getByText;
        getByLabelText = queries.getByLabelText;
        getByTestId = queries.getByTestId;
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
        const buttonElement = getByTestId('login_submit');

        expect(buttonElement).toBeInTheDocument();
    });
});
