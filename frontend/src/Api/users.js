import axios from "axios";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const url_users = `${process.env.REACT_APP_API_URL}api/users`;
export const connectLogin = (login) =>
  axios.post(`${url_users}/login`, login, {
    data: {
      email: "email",
      password: "password",
    },
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
export const connectDelete = () =>
  axios.delete(`${url_users}/profile/delete/:id`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
export const connectSignUp = (signUp) =>
  axios.post(`${url_users}/signup`, signUp, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
