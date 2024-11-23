import React from "react";
import "./Dashboard.css";
import "../Form/Form";
import "../../components/form-components/FormStep4";
import formValues from "../../components/form-components/FormStep4";
import LineGraphh from "../../Assets/Dashboard Images/LineGraph.png";
import LineGraph from "../LineGraph/LineGraph";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import NewsTable from '../../components/NewsTable/NewsTable';


//renders component with curret data
function Dashboard() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [energyCompany, setEnergyCompany] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [consumptionAmount, setConsumptionAmount] = useState("");
  const [totalConsumptionNum, setTotalConsumptionNum] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => { // use useEffect hook to fetch data from API when id prop changes
    const userID = localStorage.getItem("userID"); // make API request to fetch data

    fetch(`http://localhost:5000/bars/${userID}`)
      .then((res) => res.json()) // convert response to JSON format
      .then((data) => { 
        const consumptionArray = [];
        data.data.forEach((item) => {
          consumptionArray.push(parseFloat(item.consumption +", ")); // push each consumption value into the array
        });
        const consumptionValues = data.data.map((item) => parseFloat(item.consumption)); // create an array of parsed consumption values
        const totalConsumption = consumptionValues.reduce((total, value) => total + value, 0); // add all the consumption values together using the reduce method
        const formattedTotal = totalConsumption.toFixed(2); // format the total consumption value to two decimal places
        setTotalConsumptionNum(formattedTotal); // set state with the formatted total consumption value
        setConsumptionAmount(consumptionArray);
      })
  }, [setConsumptionAmount], [setTotalConsumptionNum]);

  if ( totalConsumptionNum >= 10000) {
    var bar = "skills-bar savingRatings1";
    var percentage = "10%";
  } else if (totalConsumptionNum >= 8000) {
    var bar = "skills-bar savingRatings2";
    var percentage = "20%";
  } else if (totalConsumptionNum >= 7000) {
    var bar = "skills-bar savingRatings3";
    var percentage = "30%";
  } else if (totalConsumptionNum >= 6000) {
    var bar = "skills-bar savingRatings4";
    var percentage = "40%";
  } else if (totalConsumptionNum >= 5000) {
    var bar = "skills-bar savingRatings5";
    var percentage = "50%";
  } else if (totalConsumptionNum >= 4000) {
    var bar = "skills-bar savingRatings6";
    var percentage = "60%";
  } else if (totalConsumptionNum >= 3000) {
    var bar = "skills-bar savingRatings7";
    var percentage = "70%";
  } else if (totalConsumptionNum >= 2000) {
    var bar = "skills-bar savingRatings8";
    var percentage = "80%";
  } else if (totalConsumptionNum >= 1000 ) {
    var bar = "skills-bar savingRatings9";
    var percentage = "90%";
  } else {
    var bar = "skills-bar savingRatings10";
    var percentage = "100%";
  }
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    //send request to server
    fetch(`http://localhost:5000/username/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        const user = data.data[0];
        setUsername(user.username);
      })
  }, [setUsername]);//keeps data synced with server
  
 //get data from localstorage then return corresponding value
 useEffect(() => {
  const userID = localStorage.getItem("userID");
  //send request to server
  fetch(`http://localhost:5000/info/${userID}`)
    .then((res) => res.json())
    .then((data) => {
      const info = data.data[0];
      setFullname(info.fullname);
      setPhoneNumber(info.phoneNumber);
      setPostcode(info.postcode);
      setEnergyCompany(info.energyCompany);
      setMonthlyCost(info.monthlyCost);
    })
}, [setFullname, setPhoneNumber, setPostcode, setEnergyCompany, setMonthlyCost]);//keeps data synced with server

const handleQQ = async (e) => {
  e.preventDefault();
  const question = e.target.elements.question.value; //retrives question 
  let submitQuestion = true;

  // Check for specific words /changes response
  if (question.includes("save") && question.includes("energy")) {
    setResponseMsg("The best ways to save energy are...");
    submitQuestion = false;
  } else if (question.includes("help") && question.includes("environment")) {
    setResponseMsg("The best ways to help the environment are...");
    submitQuestion = false;
  }
  //checks state of varible below
  console.log('submitQuestion:', submitQuestion);

  try {
    if (submitQuestion) {
      // Send a POST request to the server with the user's question
      const response = await axios.post('http://localhost:5000/api/questions', { question });
      // If the question is successfully saved in the database, display a success message
      setResponseMsg(response.data.message);
    }
  } catch (error) {
    // If the question cannot be saved in the database, display an error message
    setResponseMsg(error.response.data.message);
  }
};

  return (
    <>
      <div class="grid-container">
        <div class="section1 Form">
          <p> Account</p>
          <p> {username} </p>
        </div>
        <div class="section2 Form">Overview: </div>
        <div class="section3">
          <div className="slide-right">
            <h2>Return Home</h2>

            <a href="/Home">
              <button className="Largebutton">Home</button>
            </a>
          </div>
        </div>
        <div class="section4">
          <button
            onClick={() =>
              document.querySelector(".slide-right").classList.toggle("visible")
            }
            className="slide-right-button"
          >
            Back
          </button>
          {/*information taken from forms_table SQL page to be displayed back to the user */}
          <div>Full Name: {fullname}</div>
          <div>Phone Number: {phoneNumber}</div>
          <div>Post Code: {postcode}</div>
          <div>Energy Company: {energyCompany}</div>
          <div>Monthly Cost: {monthlyCost}</div>
          <div>total: {totalConsumptionNum}</div>
        </div>

        <div class="section5">
          <div class="container-skills">
            <div className={bar}>{percentage}</div>
          </div>
        </div>

        <div class="section6">
          <div style={{ width: '1000px', height: '1000px', marginLeft: '20px' }}>
            <LineGraph />
          </div>

          {/* <img src={LineGraphh} alt="linegraph" /> */}
        </div>

        <div class="section7">
          <p class = "tableInfo">Check out latest National and International news, regarding Climate Change and Energy Usage</p>
          <NewsTable />
        </div>

        <div className="section11 question-container">
        <form onSubmit={handleQQ}>
          <label htmlFor="question">Enter your question:</label>
        < input type="text" id="question" name="question" required />
        < button type="submit">Submit</button>
        </form>
        {responseMsg && <p>{responseMsg}</p>}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
