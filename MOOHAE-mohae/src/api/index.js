import axios from "axios";

// Axios 인스턴스 생성
export const API = axios.create({
  baseURL: "http://3.35.44.88:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터 설정
API.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const { data } = await API.post('/accounts/refresh/', { refresh: refreshToken });
          localStorage.setItem('access_token', data.access);
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
          return API(originalRequest);
        } catch (refreshError) {
          console.error('Refresh token expired or invalid:', refreshError);
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login'; // 로그인 페이지로 리다이렉트
        }
      } else {
        window.location.href = '/login'; // 로그인 페이지로 리다이렉트
      }
    }
    return Promise.reject(error);
  }
);
