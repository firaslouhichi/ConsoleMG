import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Userhome from "./Pages/UserHome/Userhome";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Begin from "./Pages/Begin/Begin";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Popular from "./Pages/Popular/Popular";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Begin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
