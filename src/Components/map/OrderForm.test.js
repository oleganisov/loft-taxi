import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import OrderForm from './OrderForm';
import { renderWithProviders } from '../../helpers/testUtils';

describe('Order form', () => {
    it('get text element', () => {
        const { getByText } = renderWithProviders(
            <OrderForm orderTaxi={jest.fn()} />
        );

        wait(() => expect(getByText('Откуда')).toBeInTheDocument());
    });
});
