import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profil from "./components/Profil";
import Reseau from "./components/Reseau";
import SignOut from "./components/SignOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/reseau" element={<Reseau />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
