import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  //   try {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
  //   } catch (ex) {
  //     if (ex.response && ex.response === 400) {
  //     }
  //   }
}
