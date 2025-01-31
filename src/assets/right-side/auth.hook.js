import { useMutation } from '@tanstack/react-query';
import { signup } from './axios';

export const useSignup = () => {
    return useMutation({
        mutationFn: signup
    });
};
