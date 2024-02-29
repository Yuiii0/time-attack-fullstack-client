import axios from "axios";
import authAPI from "./auth.api/auth.api";
import dealsAPI from "./deals.api/deals.api";
import likesAPI from "./likes.api/likes.api";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const coreClient = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

const api = {
  auth: authAPI,
  deals: dealsAPI,
  likes: likesAPI,
};

export default api;
