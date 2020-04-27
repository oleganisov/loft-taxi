import { BASE_URL } from '../../helpers/constant';

export const loginAuth = async (payload) => {
    const response = await fetch(`${BASE_URL}/auth`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const registerAuth = async (payload) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};
