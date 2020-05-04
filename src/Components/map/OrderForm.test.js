import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import OrderForm from './OrderForm';
import { renderWithProviders } from '../../helpers/testUtils';

describe('Order form', () => {
    const orderTaxiMock = jest.fn();

    it('get elements by text', () => {
        const { getByText } = renderWithProviders(
            <OrderForm orderTaxi={orderTaxiMock} />
        );

        wait(() => expect(getByText('Откуда')).toBeInTheDocument());
        wait(() => expect(getByText('Куда')).toBeInTheDocument());
        wait(() => expect(getByText('Вызвать такси')).toBeInTheDocument());
    });

    it('click button', () => {
        const { getByText } = renderWithProviders(
            <OrderForm orderTaxi={orderTaxiMock} />
        );

        fireEvent.click(getByText('Вызвать такси'), {
            target: {
                address_from: 'Адрес1',
                address_to: 'Адрес2',
            },
        });
        wait(() => expect(orderTaxiMock).toHaveBeenCalled());
        wait(() => expect(/заказ размещён/i).toBeInTheDocument());

        wait(() => fireEvent.click(getByText(/сделать новый заказ/i)));

        wait(() => expect(/откуда/i).toBeInTheDocument());
    });
});
