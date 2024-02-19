import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Userhome from "./Components/UserHome/Userhome";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Begin from "./Components/Begin/Begin";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/begin" element={<Begin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userhome" element={<Userhome />} />
      </Routes>
    </>
  );
};

export default App;
