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

const store = createStore();

describe('Header menu', () => {
    const logoutUserMock = jest.fn();
    let getByText, getByTestId;
    beforeEach(() => {
        const queries = render(
            <BrowserRouter>
                <Header logoutUser={logoutUserMock} store={store} />
            </BrowserRouter>
        );

        getByText = queries.getByText;
        getByTestId = queries.getByTestId;
    });
    afterEach(() => {
        cleanup();
    });

    it('get button Map', () => {
        expect(getByText('Карта')).toBeInTheDocument();
    });

    it('get button Profile', () => {
        expect(getByTestId('link-profile')).toBeInTheDocument();
    });

    test('click button Profile', async () => {
        fireEvent.click(getByTestId('link-profile'));

        expect(await screen.findByTestId('payment-form')).toBeInTheDocument();
    });
    it('click button Map', () => {
        fireEvent.click(getByText('Карта'));
        expect(handlerPageMock).toHaveBeenCalled();
    });
    it('click button Logout', () => {
        fireEvent.click(getByText('Выйти'));
        expect(logoutUserMock).toHaveBeenCalled();
    });
});
