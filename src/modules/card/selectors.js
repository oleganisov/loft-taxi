// import { createSelector } from 'reselect';

export const getCardNumber = (state) => state.card.cardNumber;
export const getCardExpDate = (state) => state.card.expiryDate;
export const getCardName = (state) => state.card.cardName;
export const getCardCVC = (state) => state.card.cvc;
