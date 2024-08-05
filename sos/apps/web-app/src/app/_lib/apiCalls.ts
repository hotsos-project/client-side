import axios from 'axios';
import { api } from './api';

export const loginUser = async (credentials: { loginId: string; password: string }) => {
  const response = await axios.post('https://i11a607.p.ssafy.io/api/login', credentials, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchUserInfo = async () => {
  const response = await api.get(`/members`);
  return response.data;
};

export const fetchSidos = async () => {
  const response = await api.get('/sidos');
  return response.data;
};
