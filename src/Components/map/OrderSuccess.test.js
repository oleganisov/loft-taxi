import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import OrderSuccess from './OrderSuccess';
import { renderWithProviders } from '../../helpers/testUtils';

describe('Order success form', () => {
    const handleClickMock = jest.fn();

    it('click new order', () => {
        const { getByText } = renderWithProviders(
            <OrderSuccess handleClick={handleClickMock} />
        );

        fireEvent.click(getByText('Сделать новый заказ'));

        wait(() => expect(getByText('Откуда')).toBeInDocument());
    });
});
