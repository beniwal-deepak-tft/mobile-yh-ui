import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://203.110.83.74:8080", // Replace with your API base URL
  timeout: 90000, // Timeout after 10 seconds
});

const token = localStorage.getItem("token");
// Interceptor for request (optional, e.g., adding auth token)
api.interceptors.request.use(
  (config) => {
    // Add any custom headers if needed
    config.headers["Authorization"] = token ? `Bearer ${token}` : "";
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor for response (optional, e.g., handling errors globally)
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
