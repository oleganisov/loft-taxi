import React from 'react';
import Order from './Order';
import { renderWithProviders } from '../../helpers/testUtils';
import { createStore } from 'redux';
import { rootReducer } from '../../modules';

describe('Order', () => {
    const resetMock = jest.fn();
    it('render go to profile form', () => {
        const { getByText } = renderWithProviders(
            <Order reset={resetMock} />,
            createStore(rootReducer, { card: { isProfileUpdated: false } })
        );

        expect(getByText('Заполните платежные данные')).toBeTruthy();
    });

    it('render order form', () => {
        const { getByText } = renderWithProviders(
            <Order reset={resetMock} />,
            createStore(rootReducer, { card: { isProfileUpdated: true } })
        );
        expect(getByText('Откуда')).toBeTruthy();
    });

    it('render success form', () => {
        const { getByText } = renderWithProviders(
            <Order reset={resetMock} isOrderedInit={true} />,
            createStore(rootReducer, { card: { isProfileUpdated: true } })
        );
        expect(getByText('Заказ размещён')).toBeTruthy();
    });
});
