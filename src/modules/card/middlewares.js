import { cardRequest, cardSuccess, cardFailure } from './actions';

export const cardFetchMiddleware = (store) => (next) => (action) => {
    if (action.type === cardRequest.toString()) {
        fetch('https://loft-taxi.glitch.me/card', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const { success, error } = json;
                const {
                    cardNumber,
                    expiryDate,
                    cardName,
                    cvc,
                } = action.payload;
                success
                    ? store.dispatch(
                          cardSuccess({ cardNumber, expiryDate, cardName, cvc })
                      )
                    : store.dispatch(cardFailure(error));
            })
            .catch((error) => {
                store.dispatch(cardFailure(error));
            });
    }
    return next(action);
};
