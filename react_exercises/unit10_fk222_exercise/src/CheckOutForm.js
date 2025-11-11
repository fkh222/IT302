/**
 * Fariha Khan
 * 11/10/25
 * IT302-451
 * Unit 10 Exercise
 * fk222@njit.edu
 */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';


function CheckOutForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkOut, setCheckOut] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // insert alert here
        alert(email+" checked out successfully");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"
                    checked={checkOut}
                    onChange={(e) => setCheckOut(e.target.checked)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CheckOutForm;