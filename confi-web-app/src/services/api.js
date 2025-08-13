import axios from 'axios';

const API_BASE_URL = 'https://confi-web-app.onrender.com/api/v1';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/token/refresh`, {
            refresh_token: refreshToken
          });
          
          const { access_token } = response.data;
          localStorage.setItem('access_token', access_token);
          
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/users/register', userData),
  login: (credentials) => api.post('/users/login', credentials),
  logout: () => api.post('/users/logout'),
  getProfile: () => api.get('/users/me'),
  refreshToken: (refreshToken) => api.post('/token/refresh', { refresh_token: refreshToken }),
};

// Product API
export const productAPI = {
  getProductSeries: () => api.get('/products/product-series'),
  getPixels: (seriesId) => api.get(`/products/pixels/${seriesId}`),
  getProductParams: () => api.get('/products/product-params'),
  getComponentParams: () => api.get('/products/component-params'),
};

// Controller API
export const controllerAPI = {
  getControllers: () => api.get('/controllers/'),
  getControllerPrices: () => api.get('/controllers/price'),
};

// Hardware API
export const hardwareAPI = {
  getHardwarePrices: () => api.get('/hardware/price'),
};

// Quote API
export const quoteAPI = {
  getQuotes: (userId) => api.get(`/quotes/${userId}`),
  createQuote: (userId, quoteData) => api.put(`/quotes/${userId}`, quoteData),
  updateQuote: (userId, quoteData) => api.patch(`/quotes/${userId}`, quoteData),
  getQuotePrice: (quoteId) => api.get(`/quotes/price/${quoteId}`),
  createQuotePrice: (quoteId, priceData) => api.put(`/quotes/price/${quoteId}`, priceData),
  updateQuotePrice: (quoteId, priceData) => api.patch(`/quotes/price/${quoteId}`, priceData),
};

// Organisation API
export const organisationAPI = {
  createOrganisation: (orgData) => api.put('/organisations/', orgData),
  updateOrganisation: (orgId, orgData) => api.patch(`/organisations/${orgId}`, orgData),
};

export default api; 