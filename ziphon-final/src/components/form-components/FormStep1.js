import { useForm } from 'react-hook-form';
import '../../pages/Form/form.css'
import React from 'react';
//imports

 function Step1({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit} = useForm();

  // functions when the button next/submit is pressed
  const onSubmit = (values) => {
    const phoneNum2 = values.Phonenumber;
    const Fullname2 = values.fullname;
    const Postcode2 = values.Postcode;

// validation for phone number if phone numver is inputted
    if (!/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}/.test(Fullname2)) {
      alert("Please enter a valid name.")
      return;
    }
    
// validation for phonenumber if not valid phonenumber length/start
    if (!/^[1-9]\d{8,9}/.test(phoneNum2)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // validation for postcode if not valid UKpostcode length for both the outward and inner
    if (!/^[a-zA-Z]{1}[a-zA-Z0-9]{1,3}\s?[0-9]{1}[a-zA-Z0-9]{2}/.test(Postcode2)) {
      alert("Please enter a valid postcode.");
      return;
    }

    // Add +44 prefix to phone number
    const phoneNum = "+44" + values.Phonenumber;

    // Update form values state
    setFormValues ({ ...formValues, ...values, Phonenumber: phoneNum });
    // Update form values state
    setStep(2);
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='formS'>

      <input
            className="input-field"
            {...register('fullname',)}
            id="flnm" 
            type="text" 
            placeholder="Full Name"
            required
          />
          <br /><br />

      <div className="tel-box">
        <label>
          <span className='Fheader'>+44</span> 
            <input 
              className="input-field" 
              {...register('Phonenumber',)}
              id="telnum" 
              type="tel" 
              placeholder="Phone number" 
              required
            /> 
          </label>
        </div>
        <br /><br />

        <input 
          className="input-field" 
          {...register("Postcode",)}  
          id="Postcode" 
          type="text" 
          placeholder="PostCode" required />
    

        <div className='formS'>
          <button type="submit" id="btn" name="submitButton" defaultValue="Next">
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default Step1;