import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import { renderWithProviders } from '../../helpers/testUtils';
import { createStore } from 'redux';
import { rootReducer } from '../../modules';

describe('Payment form', () => {
    it('get text', () => {
        const { getByText } = renderWithProviders(
            <PaymentForm token="11111" />,
            createStore(rootReducer, { auth: { token: '111' } })
        );

        wait(() => expect(getByText('Способ оплаты')).toBeInTheDocument());
    });
});
