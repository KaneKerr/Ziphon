import React from 'react';
import './Home.css';
import FooterS from '../../components/footer/footer';
import Rewards from '../../Assets/Images/reward.png';
import Data from '../../Assets/Images/personal-data.png';
import Audience from '../../Assets/Images/audience.png';
import Support from '../../Assets/Images/support.png';
import Newsletter from '../../components/Newsletter/Newsletter';



function Home() {
  return (
    <div classname="Home">
      <header>
      </header>
      <div className="container">
        <div className="banner-text">
          <span>Easiest</span> <span>Way</span> <span>To</span> <span>Save</span> <span>Money</span>
          <br /><span>Is</span> <span>To</span> <span>Waste</span> <span>Less</span> <span>Energy</span><br /><span>-</span><br /><span>Barack</span> <span>Obama</span>
        </div>
        {/* 
       <button id="signUpBtn">
          <a id="signUp" href="./SignUpPage/index.html">Sign Up For Free</a>
        </button>
       */}
      </div>
      <div className="container2">
        <div className="titleBanner">
          <h3 className="title">Our Plan</h3>
        </div>
        <div className="flipcardContainer">
          <div className="flipcard">
            <div className="flipcard-inner">
              <div className="flipcard-front">
                <h3 className="flipcardTitle">Incentivise Savings</h3>
                <img alt="Rewards" src={Rewards} /> {/* Reward Image goes here*/}
                <p className="cornerText">Hover to find out more</p>
              </div>
              <div className="flipcard-back">
                <ul>
                  <li className="flipcardText">Get rewarded for saving energy on a monthly basis.</li><br />
                  <li className="flipcardText">Receive tokens when there is a positive trend in energy saving.</li><br />
                  <li className="flipcardText">Spend your rewards on smart home equipment - or support charities that want to establish cleaner energy sources.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipcard">
            <div className="flipcard-inner">
              <div className="flipcard-front">
                <h3 className="flipcardTitle">Customer Security</h3>
                <img alt="Data" src={Data} /> {/* Security Image goes here */}
                <p className="cornerText">Hover to find out more</p>
              </div>
              <div className="flipcard-back">
                <ul>
                  <li className="flipcardText">We only take data that is required to help you visualise your energy usage.</li><br />
                  <li className="flipcardText">Security is of top priority, all data is protected to ensure the best security for customers.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipcard">
            <div className="flipcard-inner">
              <div className="flipcard-front">
                <h3 className="flipcardTitle">Valuable Insights</h3>
                <img alt="Audience" src={Audience} /> {/* Insight Image goes here */}
                <p className="cornerText">Hover to find out more</p>
              </div>
              <div className="flipcard-back">
                <ul>
                  <li className="flipcardText">Gain personalised insights to help reduce energy bills</li><br />
                  <li className="flipcardText">Get access to resources that help save energy around the house</li><br />
                  <li className="flipcardText">If you have any helpful advice, share them for other customers to use in their homes.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipcard">
            <div className="flipcard-inner">
              <div className="flipcard-front">
                <h3 className="flipcardTitle">Support Charities</h3>
                <img alt="Support" src={Support} /> {/* Support Image goes here */}
                <p className="cornerText">Hover to find out more</p>
              </div>
              <div className="flipcard-back">
                <ul>
                  <li className="flipcardText">Follow and support charities that have similar ideals as us.</li><br />
                  <li className="flipcardText">Donate using money or rewarded tokens to these charities and help to save energy across the country.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class = "container3">
        <div class = "left-half">
          <h2>Sign up for the Newsletter</h2>
          <h3 id = "smallTxt">What to expect...</h3>
          <ul class = "newsletterInfo">
            <li class = "newsletterList">Latest updates on how you could be affected by price changes</li>
            <li class = "newsletterList">What are the best tips currently that can help you to save energy</li>
            <li class = "newsletterList">Ways to better prepare your home to be more eco-friendly and smarter</li>
            <li class = "newsletterList">Find out what other users of our platform have to say about their savings</li>
          </ul>
        </div>
        <div class = "right-half">
          <Newsletter />
        </div>
      </div>
      <div>
        <FooterS />
      </div>
    </div>


  );
};

export default Home;