import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import CardSaved from './CardSaved';
import { renderWithProviders } from '../../helpers/testUtils';

describe('Card saved form', () => {
    it('click go to map', () => {
        const { getByText } = renderWithProviders(<CardSaved />);

        fireEvent.click(getByText('Перейти на карту'));

        wait(() => expect(getByText('Откуда')).toBeInDocument());
    });
});
