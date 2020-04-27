import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    getRouteRequest,
    getRouteSuccess,
    getRouteFailure,
    getAddressListRequest,
    getAddressListSuccess,
    getAddressListFailure,
} from './actions';

const addresses = handleActions(
    {
        [getAddressListRequest]: () => [],
        [getAddressListSuccess]: (_state, action) => action.payload,
        [getAddressListFailure]: () => [],
    },
    []
);
const address1 = handleActions(
    {
        [getRouteRequest]: () => null,
        [getRouteSuccess]: (_state, action) => action.payload.address1,
        [getRouteFailure]: () => null,
    },
    null
);
const address2 = handleActions(
    {
        [getRouteRequest]: () => null,
        [getRouteSuccess]: (_state, action) => action.payload.address2,
        [getRouteFailure]: () => null,
    },
    null
);
const coordinates = handleActions(
    {
        [getRouteRequest]: () => [],
        [getRouteSuccess]: (_state, action) => action.payload.coordinates,
        [getRouteFailure]: () => [],
    },
    []
);
const error = handleActions(
    {
        [getRouteRequest]: () => null,
        [getRouteSuccess]: () => null,
        [getRouteFailure]: (_state, action) => action.payload,
        [getAddressListRequest]: () => null,
        [getAddressListSuccess]: () => null,
        [getAddressListFailure]: (_state, action) => action.payload,
    },
    null
);

export default combineReducers({
    addresses,
    address1,
    address2,
    coordinates,
    error,
});
