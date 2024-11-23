import React, { useState } from 'react';
import '../../pages/Tips&Tricks/TipsPageStyles.css';
import './QandA.css';
function Dropdown() {
  const [sectionOne, setSectionOne] = useState(false);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setSectionOne(!sectionOne)}>What are some simple ways to save energy and money at home?</button>
      {sectionOne && (
        <div className="dropdown-section">
          <p>Turning off lights and electronics when not in use, using energy-efficient light bulbs, adjusting your thermostat to a pleasant but energy-saving range, and sealing cracks around windows and doors are just a few simple methods to save energy and money at home.</p>
        </div>
      )}
      <button className="dropdown-button" onClick={() => setSectionTwo(!sectionTwo)}>What is the difference between renewable and non-renewable energy?</button>
      {sectionTwo && (
        <div className="dropdown-section">
          <p>Renewable energy is produced by replenishable natural resources including solar, wind, and hydropower. Oil, coal, and natural gas are a few examples of non-renewable energy sources that are limited.</p>
        </div>
      )}
      <button className="dropdown-button" onClick={() => setSectionThree(!sectionThree)}> How can I choose the best energy plan for my needs?</button>
      {sectionThree && (
        <div className="dropdown-section">
          <p>To choose the best energy plan for your needs, you should compare rates and plans from different providers, consider your energy usage patterns, and choose a plan that fits your budget and energy goals. You may also want to consider the provider's customer service and reputation.</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
