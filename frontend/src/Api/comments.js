import axios from "axios";

export const getComments = (post) =>
  axios.get(`${process.env.REACT_APP_API_URL}api/comments/${post.post.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
