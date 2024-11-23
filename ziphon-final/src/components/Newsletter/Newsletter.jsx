import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';

function Newsletter() {
    const [fName, setfName] = useState([]);
    const [lName, setlName] = useState([]);
    const [email, setEmail] = useState([]);

    const handlefNameChange = (e) => {
        setfName(e.target.value);
    }

    const handlelNameChange = (e) => {
        setlName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/newsletter', {
            fName: fName,
            lName: lName,
            email: email
        })
        .then(response => {
            alert("Thank you for subscribing to the Newsletter!")
            setfName('');
            setlName('');
            setEmail('');
        })
        .catch( error => {
            console.log(error);
            alert('Failed to subscribe for the Newsletter');
        });
    }

    return (
        <div> 
            <h3 class = "smallerTxt">Get your latest Newsletter today!</h3>
            <form id = "newsletterForm" onSubmit = {handleSubmit}>
                <input type = "text" class = "newsletterInput" placeholder = "First Name" value = {fName} onChange = {handlefNameChange} />
                <br></br>

                <input type = "text" class = "newsletterInput" placeholder = "Surname" value = {lName} onChange = {handlelNameChange} />
                <br></br>
                
                <input type = "text" class = "newsletterInput" placeholder = "Email" value = {email} onChange= {handleEmailChange} />
                <br></br>
                <button id = "newsletterBtn" type = "submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Newsletter