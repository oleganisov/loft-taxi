import reducers from './reducers';
import {
    // saveCardRequest,
    saveCardSuccess,
    saveCardFailure,
    // fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
} from './actions';

describe('card reducers', () => {
    const initialState = {
        isProfileUpdated: false,
        id: null,
        cardNumber: null,
        cardName: null,
        expiryDate: null,
        cvc: null,
        error: null,
    };
    const cardState = {
        isProfileUpdated: true,
        id: 'rec7ovZOot1wOpp6F',
        cardNumber: '1111 1111 1111 1111',
        cardName: 'JOHN DOW',
        expiryDate: '04/25',
        cvc: '000',
        error: null,
    };
    const payload = {
        id: 'rec7ovZOot1wOpp6F',
        cardNumber: '1111 1111 1111 1111',
        cardName: 'JOHN DOW',
        expiryDate: '04/25',
        cvc: '000',
    };
    const error = 'Something went wrong';

    it('save card', () => {
        expect(reducers(initialState, saveCardSuccess(payload))).toEqual(
            cardState
        );
    });
    it('save card failure', () => {
        expect(reducers(initialState, saveCardFailure(error))).toEqual({
            ...initialState,
            error: 'Something went wrong',
        });
    });
    it('fetch card', () => {
        expect(reducers(initialState, fetchCardSuccess(payload))).toEqual(
            cardState
        );
    });
    it('fetch card failure', () => {
        expect(reducers(initialState, fetchCardFailure(error))).toEqual({
            ...initialState,
            error: 'Something went wrong',
        });
    });
});
