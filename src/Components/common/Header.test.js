import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header menu', () => {
    const handlerPageMock = jest.fn();
    let getByText;
    beforeEach(() => {
        const queries = render(<Header handlerPage={handlerPageMock} />);

        getByText = queries.getByText;
    });
    afterEach(() => {
        cleanup();
    });

    it('get button Map', () => {
        expect(getByText('Карта')).toBeInTheDocument();
    });

    it('click button Profile', () => {
        fireEvent.click(getByText('Профиль'));
        expect(handlerPageMock).toHaveBeenCalled();
    });
    it('click button Map', () => {
        fireEvent.click(getByText('Карта'));
        expect(handlerPageMock).toHaveBeenCalled();
    });
    it('click button Logout', () => {
        fireEvent.click(getByText('Выйти'));
        expect(handlerPageMock).toHaveBeenCalled();
    });
});
