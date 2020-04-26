import React from 'react';
import {
    render,
    cleanup,
    fireEvent,
    waitFor,
    screen,
} from '@testing-library/react';
import Header from './Header';
import createStore from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { logoutUser } from '../../modules/auth';
import { Provider } from 'react-redux';

const store = createStore();

describe('Header menu', () => {
    // const logoutUserMock = jest.fn();

    it('get button Map', () => {
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header logoutUser={logoutUser} />
                </BrowserRouter>
            </Provider>
        );

        expect(getByText('Карта')).toBeInTheDocument();
    });

    it('get button Profile', () => {
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header logoutUser={logoutUser} />
                </BrowserRouter>
            </Provider>
        );
        expect(getByText('Профиль')).toBeInTheDocument();
    });
    it('get button Logout', () => {
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header logoutUser={logoutUser} />
                </BrowserRouter>
            </Provider>
        );
        expect(getByText('Выйти')).toBeInTheDocument();
    });

    test('click button Profile', async () => {
        const { getByText, findByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header logoutUser={logoutUser} />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.click(getByText('Профиль'));
        expect(await findByTestId('payment-form')).toBeInTheDocument();
    });

    it('click button Logout', () => {
        const { getByText, debug } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header logoutUser={logoutUser} />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.click(getByText('Выйти'));
        debug();
        expect(getByText('Войти')).toBeInTheDocument();
    });
});
