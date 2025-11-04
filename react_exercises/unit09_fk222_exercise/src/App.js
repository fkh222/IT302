/**
 * Fariha Khan
 * 11/4/25
 * IT302-451
 * Unit 9 Exercise
 * fk222@njit.edu
 */

import logo from './logo.svg';
import './App.css';

import MyNavigationBar from './MyNavigationBar';
import Bookshelf from './Bookshelf';
import { Routes, Route, Navigate } from "react-router-dom";




function App() {
  // jsx variables
  const myName = <h1>Fariha Khan</h1>
  const course = <h2>IT302</h2>
  const sectionNum = <h2>Section Number: 451</h2>

  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const date = <h4 id="current-date">Today's Date: {formattedDate}</h4>

  const exerciseUnit = <h3>Unit 09 Exercise</h3>
  const email = <h3>fk222@njit.edu</h3>

  return (
    <div className="App">
      <MyNavigationBar />
      {myName}
      {course}
      {sectionNum}
      {date}
      {exerciseUnit}
      {email}

      <Routes>

        <Route path="/" element={<Navigate to="/" />}></Route>
        <Route path="/bookshelf" element={<Bookshelf />} ></Route>

      </Routes>
    </div>
  );
}

export default App;
