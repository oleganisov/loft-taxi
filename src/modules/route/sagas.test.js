import { recordSaga } from '../../helpers/testUtils';
import * as sagas from './sagas';
import * as api from './api';
import {
    getRouteRequest,
    getRouteSuccess,
    getRouteFailure,
    getAddressListRequest,
    getAddressListSuccess,
    getAddressListFailure,
} from './actions';

describe('route', () => {
    describe('get addresses', () => {
        const error = new Error('Something went wrong');
        api.getAddressList = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('get addresses success', async () => {
            const result = {
                addresses: [
                    'Пулково (LED)',
                    'Шаверма на Невском',
                    'Инфекционная больница им. Боткина',
                    'Волковское кладбище',
                ],
            };
            api.getAddressList.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.getAddressList,
                getAddressListRequest()
            );

            expect(api.getAddressList).toHaveBeenCalled();
            expect(dispatched).toContainEqual(
                getAddressListSuccess(result.addresses)
            );
        });

        it('get addresses failed', async () => {
            api.getAddressList.mockImplementation(() => {
                throw error;
            });

            const dispatched = await recordSaga(
                sagas.getAddressList,
                getAddressListRequest()
            );

            expect(api.getAddressList).toHaveBeenCalled();
            expect(dispatched).toContainEqual(getAddressListFailure(error));
        });
    });
    describe('get route', () => {
        const address1 = 'Пулково (LED)';
        const address2 = 'Шаверма на Невском';
        const error = new Error('Something went wrong');
        api.getRoute = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('get route success', async () => {
            const result = [
                [30.272183, 59.80065],
                [30.27744, 59.799996],
            ];
            api.getRoute.mockImplementation(() => result);

            const dispatched = await recordSaga(
                sagas.getRoute,
                getRouteRequest({ address1, address2 })
            );

            expect(api.getRoute).toHaveBeenCalledWith({ address1, address2 });
            expect(dispatched).toContainEqual(
                getRouteSuccess({ address1, address2, coordinates: result })
            );
        });

        it('get route failed', async () => {
            api.getRoute.mockImplementation(() => {
                throw error;
            });

            const dispatched = await recordSaga(
                sagas.getRoute,
                getRouteRequest({ address1, address2 })
            );

            expect(api.getRoute).toHaveBeenCalledWith({ address1, address2 });
            expect(dispatched).toContainEqual(getRouteFailure(error));
        });
    });
});
