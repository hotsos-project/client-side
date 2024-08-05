import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://i11a607.p.ssafy.io/api',
  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // 토큰 만료 처리
    if (
      error.response?.status === 500 &&
      error.response?.data?.data?.code === 'C003' &&
      error.response?.data?.data?.detailMessage === '만료된 JWT 토큰입니다.' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const currentAccessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('https://i11a607.p.ssafy.io/api/reissue', {
          accessToken: currentAccessToken,
          refreshToken,
        });
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // 리프레시 토큰도 만료되었다면 로그아웃 처리
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
