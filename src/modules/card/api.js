import { BASE_URL } from '../../helpers/constant';

export const saveCard = async (payload) => {
    const response = await fetch(`${BASE_URL}/card`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
};

export const fetchCard = async (token) => {
    const response = await fetch(`${BASE_URL}/card?token=${token}`);

    return response.json();
};
