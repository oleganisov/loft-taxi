import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import Header from './Header';
import { renderWithProviders } from '../../helpers/testUtils';

describe('Header menu', () => {
    let getByText;
    beforeEach(() => {
        const queries = renderWithProviders(<Header />);

        getByText = queries.getByText;
    });

    it('get button Map', () => {
        wait(() => expect(getByText('Карта')).toBeInTheDocument());
    });

    it('get button Profile', () => {
        wait(() => expect(getByText(/профиль/i)).toBeInTheDocument());
    });
    it('get button Logout', () => {
        wait(() => expect(getByText('Выйти')).toBeInTheDocument());
    });

    it('click button Profile', () => {
        fireEvent.click(getByText(/профиль/i));
        wait(() => expect(getByText(/способ оплаты/i)).toBeInTheDocument());
    });

    it('click button Logout', () => {
        fireEvent.click(getByText(/выйти/i));
        wait(() => expect(getByText('Войти')).toBeInTheDocument());
    });
});
