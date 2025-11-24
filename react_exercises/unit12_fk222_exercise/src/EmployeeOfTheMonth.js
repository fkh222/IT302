/**
 * Fariha Khan
 * 11/24/25
 * IT302-451
 * Unit 12 Exercise
 * fk222@njit.edu
 */

import React, { useState, useEffect } from 'react'
import axios from "axios";


function EmployeeOfTheMonth() {
    const [employee, setEmployee] = useState(null);

    //A fetchRandomUser function that makes an HTTP GET request to a random user.
    const fetchRandomUser = () => {
        let userId = Math.floor(Math.random() * 10) + 1;
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.data)
            .then(user => setEmployee(user))
            .catch(error => console.error('Error fetching random user:', error));
    };

    //A useEffect that calls this function whenever the component loads.
    useEffect(() => {
        fetchRandomUser();
    }, []);

    return (
        <div>
            <h2>Employee of the Month</h2>
            {employee ? (
                <>
                    <p>Name: {employee.name}</p>
                    <p>Email: {employee.email}</p>
                    <p>Phone #: {employee.phone}</p>
                </>
            ) : (
                <>
                    <p>Loading. . .</p>
                </>
            )}
        </div>
    );
}

export default EmployeeOfTheMonth;