import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import { renderWithProviders } from '../../helpers/testUtils';
import { createStore } from 'redux';
import { rootReducer } from '../../modules';

describe('Payment form', () => {
    const setIsCardSavedMock = jest.fn();

    it('get elements by text', () => {
        const { getByText } = renderWithProviders(
            <PaymentForm setIsCardSaved={setIsCardSavedMock} />,
            createStore(rootReducer, { auth: { token: '111' } })
        );

        wait(() => expect(getByText('Номер карты')).toBeInTheDocument());
        wait(() => expect(getByText('Срок действия')).toBeInTheDocument());
        wait(() => expect(getByText('Имя владельца')).toBeInTheDocument());
        wait(() => expect(getByText(/cvc/i)).toBeInTheDocument());
    });
    it('save card', () => {
        const { getByText } = renderWithProviders(
            <PaymentForm setIsCardSaved={setIsCardSavedMock} />,
            createStore(rootReducer, { auth: { token: '111' } })
        );

        fireEvent.click(getByText('Сохранить'), {
            target: {
                card_number: '1111111111111111',
                card_date: '02/28',
                card_owner: 'IVAN IVANOV',
                card_cvc: '123',
            },
        });
        wait(() => expect(setIsCardSavedMock).toHaveBeenCalled());
    });
});
