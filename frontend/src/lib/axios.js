import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : import.meta.env.MODE=== "development" ? "https://chatifycomplete.onrender.com" : "/api",
    withCredentials : true
})
