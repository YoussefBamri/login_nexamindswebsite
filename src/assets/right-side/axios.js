import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://auth-dev.nexa-minds.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signup = async (payload) => {
const response = await axiosInstance.post('https://auth-dev.nexa-minds.com/authentication/talent/local/signup', payload);
return response.data;
}
