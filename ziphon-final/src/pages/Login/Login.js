import "./Login.css";
import { useState, useEffect } from 'react';
import axios from 'axios'; // JS Library that allows HTTPS requests from a node.js
import { useNavigate } from 'react-router-dom';

function Login() {
  // Define state variables to store the username, password, and login message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate(); // Initialize useHistory hook


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents default behaviour of the form which is to refresh the page

    try {
      // Send a POST request to the login API endpoint with the username and password
      const response = await axios.post('http://localhost:5000/api/login', { username, password });

      // If the login is successful, store the JWT token in local storage and update the login message
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userID', response.data.userID);
      setMessage(response.data.message);
      setLoggedIn(true);

    } catch (error) {
      // If the login fails, display an error message
      setMessage(error.response.data.message);
    }
  };

// Redirect to home page upon successful login

  useEffect(() => {
    if (loggedIn) {
      const timeout = setTimeout(() => {
        navigate('/home');
      }, countdown * 1000);

      const interval = setInterval(() => {
        setCountdown(preCountdown => preCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(timeout)
        clearInterval(interval);
      };

    }
  });

  


  // Testing Login Form
  return (
    <body>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/29763fc397.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>

      <div className="container">
        <div className="loginBox">
          <form onSubmit={handleSubmit} className="loginForm">
            <p id = "login">Login</p>
            <p id = "p1">Sign in to your account</p>
            
            <br></br>

            <div className="input-icons">
              <i className="fa fa-user icon"></i>
              {/* <label htmlFor="username">Username</label> */}
              <input className="loginFields"
                placeholder="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <br></br>

            <div className="input-icons">
              <i className="fa fa-lock icon"></i>
              {/* <label htmlFor="password">Password</label> */}
              <input className="loginFields"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <br></br>

            <button type="submit" id="btn">Login</button><br></br><br></br>
            <br></br><br></br>{message && <p>{message}</p>}
            {loggedIn && <p>Redirecting to homepage in {countdown} seconds...</p>}

          </form>
          <div>


            <a href="/Register">
              <p className="registerLink">Register</p>
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;