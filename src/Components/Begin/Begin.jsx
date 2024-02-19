import React from 'react';
import Home from '../Home/Home'; 
import Navbar from '../Navbar/Navbar'; 
import Popular from '../Popular/Popular'; 
import '../Begin/begin.css';
const Begin = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      {/*  <About/> 
       <Blog/>
      <Footer/> */}
    </>
  );
};

export default Begin;
