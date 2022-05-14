import axios from "axios";

// exportation d'une méthode axios pour récupérer les commentaires
export const getComments = (post) =>
  axios.get(`${process.env.REACT_APP_API_URL}api/comments/${post.post.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
