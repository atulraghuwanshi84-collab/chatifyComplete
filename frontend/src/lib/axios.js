import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5000"        // local backend for development
    : "https://chatifycomplete.onrender.com",  // render backend for production
  withCredentials: true,
});
