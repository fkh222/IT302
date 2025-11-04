/**
 * Fariha Khan
 * 11/4/25
 * IT302-451
 * Unit 9 Exercise
 * fk222@njit.edu
 */

import React from "react";

function Bookshelf(){
    const favBooks = 
    <ul>
        <li>All the Light We Cannot See - Anthony Doerr</li>
        <li>Brave New World - Aldous Huxley</li>
        <li>The Great Gatsby - F. Scott Fitzgerald</li>
    </ul>
return (
    <div className="App" style={{float:'left', padding:"20px"}}>
        <br></br>
        <h2>What are my favorite books?</h2>
        {favBooks}
    </div>
  );
}

export default Bookshelf;