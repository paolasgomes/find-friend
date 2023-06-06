import axios from "axios";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();
console.log("token => ", token);

export const api = axios.create({
  baseURL: "https://find-a-friend-api.onrender.com",
});
