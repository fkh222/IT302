/**
 * Fariha Khan
 * 11/10/25
 * IT302-451
 * Unit 10 Exercise
 * fk222@njit.edu
 */
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavigationBar from "./MyNavigationBar";

import Container from 'react-bootstrap/Container';
import CheckOutForm from './CheckOutForm';

function App() {
  return (
    <div >
      <MyNavigationBar />
      <Container>
        <CheckOutForm />
      </Container>
    </div>
  );
}

export default App;
