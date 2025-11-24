/**
 * Fariha Khan
 * 11/24/25
 * IT302-451
 * Unit 12 Exercise
 * fk222@njit.edu
 */
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavigationBar from "./MyNavigationBar.js";

import { Routes, Route, Navigate } from "react-router-dom";
import EmployeeOfTheMonth from "./EmployeeOfTheMonth.js";

import React, { useState, useEffect } from 'react'


function App() {
  const description = <h6>Fariha Khan IT302-451 - Advanced Internet Applications. Unit 12 React.js Axios Exercise.</h6>
  return (
    <div>
     <MyNavigationBar/>
     <Routes>
        <Route path="/" element={<Navigate to="/" />}></Route>
        <Route path="/employee" element={<EmployeeOfTheMonth />} ></Route>
      </Routes>
      {description}
    </div>
  );
}

export default App;
