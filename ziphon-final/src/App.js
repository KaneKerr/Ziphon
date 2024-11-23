//import { GoogleLogin } from '@react-oauth/google';
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home/Home";
import Abouts from "./pages/About/Abouts";
import Rewards from "./pages/Rewards/Rewards";
import Form from "./pages/Form/Form";
import Tips from "./pages/Tips&Tricks/Tips&Tricks";
import Register from "./pages/Register/Register";
import Logout from "./pages/Logout/Logout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Rewards" element={<Rewards />} />
          <Route path="Form" element={<Form />} />
          <Route path="Tips&Tricks" element={<Tips />} />
          <Route path="Home" element={<Home />} />
          <Route path="/about" element={<Abouts />}/>
        </Route>
        <Route path="Logout" element={<Logout />} />
        <Route path="Register" element={<Register />} />
        <Route index element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


/* <div className="App">
      <GoogleLogin
        onSuccess = {credentialResponse => {
        console.log(credentialResponse);
        }}
        onError = {() => {
        console.log('Login Failed');
        }}
      />
    </div> */