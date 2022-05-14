import axios from "axios";

//Exportation de divers appels API en lien avec les posts
//Lecture des posts
export const getPosts = () =>
  axios.get(`${process.env.REACT_APP_API_URL}api/posts/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

//Lecture d'un post
export const getPost = (UserId) =>
  axios.get(`${process.env.REACT_APP_API_URL}api/posts/${UserId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

//Creation d'un post
export const addPost = (formData) =>
  axios.post(`${process.env.REACT_APP_API_URL}api/posts/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

//Supprimer un post
export const deletePost = (post) =>
  axios.delete(
    `${process.env.REACT_APP_API_URL}api/posts/delete/${post.post.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

//Récupérer un profil par rapport à son post
export const getProfilByPost = (post) =>
  axios.get(
    `${process.env.REACT_APP_API_URL}api/posts/profile/${post.post.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
