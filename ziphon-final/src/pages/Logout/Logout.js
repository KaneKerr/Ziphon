import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//a button that returns the user back to the login/signup page
// will also refresh the currrent user to 0
function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('token');
            localStorage.removeItem('userID');
            console.log("Logged out")
            navigate('/');
        }
    })
};


export default Logout;



