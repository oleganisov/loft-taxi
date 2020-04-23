import { createAction } from 'redux-actions';

export const getRouteRequest = createAction('GET_ROUTE_REQUEST');
export const getRouteSuccess = createAction('GET_ROUTE_SUCCESS');
export const getRouteFailure = createAction('GET_ROUTE_FAILURE');

export const getAddressListRequest = createAction('GET_ADDRESSLIST_REQUEST');
export const getAddressListSuccess = createAction('GET_ADDRESSLIST_SUCCESS');
export const getAddressListFailure = createAction('GET_ADDRESSLIST_FAILURE');
