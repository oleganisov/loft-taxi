import reducers from './reducers';
import {
    getRouteSuccess,
    getRouteFailure,
    getAddressListSuccess,
    getAddressListFailure,
} from './actions';

describe('route reducers', () => {
    const initialState = {
        addresses: [],
        address1: null,
        address2: null,
        coordinates: [],
        error: null,
    };
    const routeState = {
        addresses: [],
        address1: 'Пулково (LED)',
        address2: 'Шаверма на Невском',
        coordinates: [
            [30.272183, 59.80065],
            [30.27744, 59.799996],
        ],
        error: null,
    };
    const addressState = {
        addresses: [
            'Пулково (LED)',
            'Шаверма на Невском',
            'Инфекционная больница им. Боткина',
            'Волковское кладбище',
        ],
        address1: null,
        address2: null,
        coordinates: [],
        error: null,
    };
    const payload = {
        address1: 'Пулково (LED)',
        address2: 'Шаверма на Невском',
        coordinates: [
            [30.272183, 59.80065],
            [30.27744, 59.799996],
        ],
    };
    const addresses = [
        'Пулково (LED)',
        'Шаверма на Невском',
        'Инфекционная больница им. Боткина',
        'Волковское кладбище',
    ];

    const error = 'Something went wrong';

    it('get route', () => {
        expect(reducers(initialState, getRouteSuccess({ ...payload }))).toEqual(
            routeState
        );
    });
    it('get route failure', () => {
        expect(reducers(initialState, getRouteFailure(error))).toEqual({
            ...initialState,
            error: 'Something went wrong',
        });
    });
    it('get address list', () => {
        expect(
            reducers(initialState, getAddressListSuccess(addresses))
        ).toEqual(addressState);
    });
    it('get address list failure', () => {
        expect(reducers(initialState, getAddressListFailure(error))).toEqual({
            ...initialState,
            error: 'Something went wrong',
        });
    });
});
