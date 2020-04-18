import {
    saveCardRequest,
    saveCardSuccess,
    saveCardFailure,
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
} from './actions';

export const cardFetchMiddleware = (store) => (next) => (action) => {
    if (action.type === saveCardRequest.toString()) {
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
                          saveCardSuccess({
                              cardNumber,
                              expiryDate,
                              cardName,
                              cvc,
                          })
                      )
                    : store.dispatch(saveCardFailure(error));
            })
            .catch((error) => {
                store.dispatch(saveCardFailure(error));
            });
    }
    if (action.type === fetchCardRequest.toString()) {
        const token = action.payload.token;
        fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
            .then((response) => response.json())
            .then((json) => {
                store.dispatch(fetchCardSuccess(json));
            })
            .catch((error) => {
                store.dispatch(fetchCardFailure(error));
            });
    }

    return next(action);
};
