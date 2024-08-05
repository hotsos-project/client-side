import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../_lib/apiCalls';

export const useAuth = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log('Login successful', data);
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
    },
    onError: (error) => {
      console.error('Login failed', error);
    },
  });
};
