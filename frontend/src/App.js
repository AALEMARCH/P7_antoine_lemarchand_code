// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserContext } from "./components/Context/AppContext";
// import Home from "./pages/Home";
// import Profil from "./pages/Profil";
// import Reseau from "./pages/Reseau";
// import SignOut from "./pages/SignOut";
// import jwt_decode from "jwt-decode";

// const userToken = () => {
//   if (localStorage.getItem("token")) {
//     const decodedToken = jwt_decode(localStorage.getItem("token"));
//     const userId = localStorage.getItem("userId");
//     const dateNow = new Date();
//     if (decodedToken.userId === userId && decodedToken.exp > dateNow) {
//       console.log("je suis ici");
//       return true;
//     } else {
//       localStorage.clear();
//       window.location = "/signOut";
//     }
//   }
// };

// function App() {
//   const dates = Date();

//   return (
//     <BrowserRouter>
//       <UserContext.Provider value={{ userToken }}>
//         <Routes>
//           <Route path="/" element={<Home date={dates} />} />
//           <Route path="/profil" element={<Profil />} />
//           <Route path="/reseau" element={<Reseau />} />
//           <Route path="/signOut" element={<SignOut />} />
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </UserContext.Provider>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UidContext } from "./components/Context/AppContext";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Reseau from "./pages/Reseau";
import SignOut from "./pages/SignOut";
import jwt_decode from "jwt-decode";

function App() {
  const dates = Date();

  // const [uid, setUid] = useState(null);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const decodedToken = jwt_decode(token);
  //   const userId = localStorage.getItem("userId");
  //   if (decodedToken.userId === userId) {
  //     console.log(userId);
  //     setUid(userId);
  //   }
  // }, [uid]);

  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(localStorage.getItem("token"));
      const dateNow = new Date();
      if (decodedToken.exp > dateNow / 1000) {
        setUserToken(true);
      } else {
        localStorage.clear();
        window.location = "/";
        setUserToken(false);
      }
    }
  }, [userToken]);

  // const [uid, setUid] = useState(null);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const decodedToken = jwt_decode(token);
  //   const userId = decodedToken.userId;

  //   setUid(userId);
  // }, [uid]);

  return (
    <BrowserRouter>
      <UidContext.Provider value={userToken}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home date={dates} />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/reseau" element={<Reseau />} />
          <Route path="/signOut" element={<SignOut />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </UidContext.Provider>
    </BrowserRouter>
  );
}

export default App;
