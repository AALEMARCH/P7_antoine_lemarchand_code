// import axios from "axios";

// const url = `${process.env.REACT_APP_API_URL}`;

// export const getPosts = () => {
//   const token = localStorage.getItem("token");
//   axios.get(`${url}api/posts`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// import axios from "axios";

// export let apiUrl = "";

// if (window.location.hostname !== "localhost") {
//   alert("Connexion impossible");
// } else {
//   apiUrl = "http://localhost:3000";
// }

// export const getHeaders = (token, option) => {

//   if (option === "application/json") {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   }
// };

export let apiUrl = "";

if (window.location.hostname !== "localhost") {
  alert("Connexion impossible");
} else {
  apiUrl = "http://localhost:3000";
}

export const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
