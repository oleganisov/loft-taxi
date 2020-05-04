import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import GoProfile from './GoProfile';
import { renderWithProviders } from '../../helpers/testUtils';

describe('Go profile form', () => {
    it('click new order', () => {
        const { getByText } = renderWithProviders(<GoProfile />);

        fireEvent.click(getByText('Перейти в профиль'));

        wait(() => expect(getByText('Способ оплаты')).toBeInDocument());
    });
});
