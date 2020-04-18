import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupForm from './SignupForm';
import createStore from '../../store';
import { BrowserRouter } from 'react-router-dom';

const store = createStore();

describe('SignupForm', () => {
    const registerUserRequestMock = jest.fn();
    let getByText, getByTestId;
    beforeEach(() => {
        const queries = render(
            <BrowserRouter>
                <SignupForm
                    registerUserRequest={registerUserRequestMock}
                    store={store}
                />
            </BrowserRouter>
        );
        getByText = queries.getByText;
        getByTestId = queries.getByTestId;
    });

    it('get link login', () => {
        const linkElement = getByText(/^войти$/i);

        expect(linkElement).toBeInTheDocument();
    });

    it('email input changes', () => {
        const inputEmail = getByTestId('email');

        fireEvent.change(inputEmail, { target: { value: 'user1@domain.com' } });
        expect(inputEmail.value).toBe('user1@domain.com');
    });
    it('click submit', () => {
        fireEvent.click(getByTestId('signup-submit'));

        expect(registerUserRequestMock).toHaveBeenCalled();
    });
});
