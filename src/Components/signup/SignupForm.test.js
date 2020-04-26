import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupForm from './SignupForm';
import { AuthProvider } from '../authContext';

describe('SignupForm', () => {
    const handlerPageMock = jest.fn();
    let getByText, getByTestId;
    beforeEach(() => {
        const queries = render(
            <AuthProvider>
                <SignupForm handlerPage={handlerPageMock} />
            </AuthProvider>
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
        expect(handlerPageMock).toHaveBeenCalled();
    });
});
