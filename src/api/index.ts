import axios from "axios";
import authAPI from "./auth.api/auth.api";

export const coreClient = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const api = {
  auth: authAPI,
};

export default api;
