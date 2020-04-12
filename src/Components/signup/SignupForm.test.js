import React from 'react';
import { render } from '@testing-library/react';
import SignupForm from './SignupForm';

const handlerLoginLinkMock = jest.fn();
const handlerPageMock = jest.fn();

describe('SignupForm', () => {
    let getByText, getByLabelText, getByTestId;
    beforeEach(() => {
        const queries = render(
            <SignupForm
                handlerLoginLink={handlerLoginLinkMock}
                handlerPage={handlerPageMock}
            />
        );
        getByText = queries.getByText;
        getByLabelText = queries.getByLabelText;
        getByTestId = queries.getByTestId;
    });

    it('get link login', () => {
        const linkElement = getByText(/^войти$/i);

        expect(linkElement).toBeInTheDocument();
    });
    it('get input email', () => {
        const inputElement = getByText(/Адрес электронной почты/i);

        expect(inputElement).toBeInTheDocument();
    });
    it('get input firstname', () => {
        const inputElement = getByLabelText(/имя/i);

        expect(inputElement).toBeInTheDocument();
    });
    it('get input lastname', () => {
        const inputElement = getByLabelText(/фамилия/i);

        expect(inputElement).toBeInTheDocument();
    });
    it('get input password', () => {
        const inputElement = getByLabelText(/пароль/i);

        expect(inputElement).toBeInTheDocument();
    });
    it('get button submit', () => {
        const buttonElement = getByTestId('signup_submit');

        expect(buttonElement).toBeInTheDocument();
    });
});
