import "../../pages/Form/form.css";
import { useForm } from "react-hook-form";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // allows us to use the function to navigate to other pages within the react-router-dom
import axios from "axios";

function Step4({ setStep, formValues, setFormValues }) {
  const [userID, setUserID] = useState("");

  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [energyCompany, setEnergyCompany] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [message, setMessage] = useState("");

  const [monDate, setMonDate] = useState("");
  const [tueDate, setTueDate] = useState("");
  const [wedDate, setWedDate] = useState("");
  const [thuDate, setThuDate] = useState("");
  const [friDate, setFriDate] = useState("");
  const [satDate, setSatDate] = useState("");
  const [sunDate, setSunDate] = useState("");

  const [energy1, setEnergy1] = useState("");
  const [energy2, setEnergy2] = useState("");
  const [energy3, setEnergy3] = useState("");
  const [energy4, setEnergy4] = useState("");
  const [energy5, setEnergy5] = useState("");
  const [energy6, setEnergy6] = useState("");
  const [energy7, setEnergy7] = useState("");



  const navigate = useNavigate();

  useEffect(() => {
    setFullname(formValues.fullname);
    setPhoneNumber(formValues.Phonenumber);
    setPostcode(formValues.Postcode);
    setEnergyCompany(formValues.EnergyCompany);
    setMonthlyCost(formValues.AverageCost);

    setUserID(localStorage.getItem('userID'));

    setMonDate(formValues.Monday);
    setTueDate(formValues.Tuesday);
    setWedDate(formValues.Wednesday);
    setThuDate(formValues.Thursday);
    setFriDate(formValues.Friday);
    setSatDate(formValues.Saturday);
    setSunDate(formValues.Sunday);

    setEnergy1(formValues.energy1);
    setEnergy2(formValues.energy2);
    setEnergy3(formValues.energy3);
    setEnergy4(formValues.energy4);
    setEnergy5(formValues.energy5);
    setEnergy6(formValues.energy6);
    setEnergy7(formValues.energy7);


  }, [formValues]);

  // functions when the button next/submit is pressed
  const onSubmit = async (e) => {
    // Update form values state
    setFormValues({ ...formValues });

    // Update form values state
    setStep(4);

    e.preventDefault(); // prevents default behaviour of the form which is to refresh the page

    console.log(
      fullname,
      phoneNumber,
      postcode,
      energyCompany,
      monthlyCost);
    console.log(
      monDate,
      tueDate,
      wedDate,
      thuDate,
      friDate,
      satDate,
      sunDate
    )
    console.log(
      energy1,
      energy2,
      energy3,
      energy4,
      energy5,
      energy6,
      energy7
    )


    try {
      const response = await axios.post("http://localhost:5000/api/form", {
        userID,
        fullname,
        phoneNumber,
        postcode,
        energyCompany,
        monthlyCost,
        monDate,
        tueDate,
        wedDate,
        thuDate,
        friDate,
        satDate,
        sunDate,
        energy1,
        energy2,
        energy3,
        energy4,
        energy5,
        energy6,
        energy7
      });

      setMessage(response.data.message);
      console.log(message);
      console.log("success");
    } catch (error) {
      // If the login fails, display an error message
      setMessage(error.response.data.message);
      console.log(message);
      console.log("failed");
    }

    navigate("/Home"); // this function happens when the submit button is pressed calling to the react-router-dom to send the user back to the main page
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form.formS">
        <h1 className="Fheader">Thank you for completing the form.</h1>
      <div className="Form_box2">

     

<p className="Fheader">Page 1</p>

<div>
<div style={{ color: "green"}}>| Full Name:</div> {formValues.fullname}
</div>

<div>
<div style={{ color: "green" }}>| Phonenumber:</div> {formValues.Phonenumber}
</div>

<div>
<div style={{ color: "green" }}>| PostCode:</div> {formValues.Postcode}
</div>

<p className="Fheader">page 2</p>
<div>
<div style={{ color: "green" }}>| EnergyCompany:</div> {formValues.EnergyCompany}
</div>

<div>
<div style={{ color: "green" }}>| AverageCost:</div>{formValues.AverageCost}
</div>

<p className="Fheader">page 3</p>
<div>
  {" "}
  <div style={{ color: "green" }}>| Monday:</div> {formValues.Monday} = {formValues.energy1}
</div>

<div>
  {" "}
  <div style={{ color: "green" }}>| Tuesday:</div> {formValues.Tuesday} = {formValues.energy2}
</div>

<div>
  {" "}
  <div style={{ color: "green" }}>| Wednesday:</div> {formValues.Wednesday} = {formValues.energy3}
</div>

<div>
  {" "}
 <div style={{ color: "green" }}>| Thursday:</div> {formValues.Thursday} = {formValues.energy4}
</div>

<div>
  {" "}
 <div style={{ color: "green" }}>| Friday:</div> {formValues.Friday} = {formValues.energy5}
</div>

<div>
  {" "}
 <div style={{ color: "green" }}>| Saturday:</div> {formValues.Saturday} = {formValues.energy6}
</div>

<div>
  {" "}
 <div style={{ color: "green" }}>| Sunday: </div> {formValues.Sunday} = {formValues.energy7}
</div>


</div>
       

        {/* {Object.entries(formValues).map(([key, value]) => (
  <p key={key}>{key}: {value}</p>
))} */}

        <div className="formS">
          <button
            type="submit"
            id="btn"
            name="submitButton"
            defaultValue="Next"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Step4;

//form complete button returns user back to home page
// the place to make the link to sql
