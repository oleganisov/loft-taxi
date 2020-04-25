import { recordSaga } from '../recordSaga';
import * as sagas from './sagas';
import * as api from './api';
import {
    saveCardRequest,
    saveCardFailure,
    saveCardSuccess,
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
} from './actions';

describe('card', () => {
    describe('save card', () => {
        const payload = {
            cardNumber: '1111 1111 1111 1111',
            cardName: 'JOHN DOW',
            expiryDate: '04/25',
            cvc: '000',
        };
        api.saveCard = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('save card success', async () => {
            const result = { success: true };
            api.saveCard.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.saveCard,
                saveCardRequest(payload)
            );

            expect(api.saveCard).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(saveCardSuccess(payload));
        });

        it('save card failed', async () => {
            const result = { success: false, error: 'Something went wrong' };
            api.saveCard.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.saveCard,
                saveCardRequest(payload)
            );

            expect(api.saveCard).toHaveBeenCalledWith(payload);
            expect(dispatched).toContainEqual(saveCardFailure(result.error));
        });
    });
    describe('fetch card', () => {
        const token = 'recd6LsCFED9hoBnN';
        api.fetchCard = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('fetch card success', async () => {
            const result = {
                id: 'rec7ovZOot1wOpp6F',
                cardNumber: '1111 1111 1111 1111',
                cardName: 'JOHN DOW',
                expiryDate: '04/25',
                cvc: '000',
            };
            api.fetchCard.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.fetchCard,
                fetchCardRequest(token)
            );

            expect(api.fetchCard).toHaveBeenCalledWith(token);
            expect(dispatched).toContainEqual(fetchCardSuccess(result));
        });

        it('fetch card failed', async () => {
            const result = { success: false, error: 'Something went wrong' };
            api.fetchCard.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.fetchCard,
                fetchCardRequest(token)
            );

            expect(api.fetchCard).toHaveBeenCalledWith(token);
            expect(dispatched).toContainEqual(fetchCardFailure(result.error));
        });
    });
});
