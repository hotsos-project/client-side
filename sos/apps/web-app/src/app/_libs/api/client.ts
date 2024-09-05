import {
  ApiErrorResponse,
  ApiRequestConfig,
  ApiResponse,
  ConditionalData,
  HttpMethod,
} from '@/app/_types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://i11a607.p.ssafy.io/api',
  withCredentials: true,
});

export const handleApiRequest = async <T, M extends HttpMethod, D = undefined>(
  url: string,
  method: M,
  data?: ConditionalData<M, D>,
  config?: ApiRequestConfig,
): Promise<T> => {
  try {
    const response = await api.request<ApiResponse<T>>({
      url,
      method,
      data,
      ...config,
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const apiError: ApiErrorResponse = error.response.data;
      const apiErrorMessage = apiError.message ? apiError.message : error.message;
      console.error(
        '🚨 Error making API request to %c%s%c 🚨\n\n Error: %c%s%c',
        'color: black; background-color: yellow; font-weight: bold;',
        url,
        '',
        'color: white; background-color: red; font-weight: bold;',
        apiErrorMessage,
        '',
      );
      throw new Error(apiErrorMessage);
    }
    console.error('🚨 Unexpected error making API request 🚨\n', error);
    throw error;
  }
};

export default api;
