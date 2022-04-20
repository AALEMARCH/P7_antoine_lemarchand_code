import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;

export const getPosts = () => {
  axios.get(`${url}api/posts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
