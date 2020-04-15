// import { createSelector } from 'reselect';

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getError = (state) => state.auth.error;
