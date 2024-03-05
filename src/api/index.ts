import axios from "axios";
import authAPI from "./auth.api/auth.api";
import dealsAPI from "./deals.api/deals.api";
import likesAPI from "./likes.api/likes.api";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const coreClient = axios.create({
  baseURL:
    "https://port-0-fullstack-timeattack-server-dc9c2nltdolaeh.sel5.cloudtype.app",
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
