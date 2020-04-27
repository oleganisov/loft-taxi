import { BASE_URL } from '../../helpers/constant';

export const getRoute = async ({ address1, address2 }) => {
    const response = await fetch(
        `${BASE_URL}/route?address1=${address1}&address2=${address2}`
    );

    return response.json();
};

export const getAddressList = async () => {
    const response = await fetch(`${BASE_URL}/addressList`);

    return response.json();
};
