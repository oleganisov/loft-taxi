import React from 'react';
import { render, fireEvent, wait, waitFor } from '@testing-library/react';
import Header from './Header';
import createStore from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore();

describe('Header menu', () => {
    let getByText, debug;
    beforeEach(() => {
        const queries = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );
        getByText = queries.getByText;
        debug = queries.debug;
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
