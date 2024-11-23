
import React from 'react';
import Logo from '../../Assets/Images/ziphonLogo.png';
import TwitterSquare from '../../Assets/Images About/twitter-logo.png';
import FacebookSquare from '../../Assets/Images About/facebook-logo.png';
import InstagramSquare from '../../Assets/Images About/instagram-logo.png';
import './About.css';
import './AboutPageStyles.css';

const AboutUs = () => {
  return (
    <div className='Full'>
      <div>
      <img className='logo5' src={Logo} alt='ziphonlogo' /></div>
      <div className='breif'>
      <div className='Title'>
      <h1>Nice to meet you</h1></div>
      <div className='para'>
      <p>Welcome to Ziphon LTD, an energy-saving firm that can help you save money on your energy bills while also lowering your carbon footprint. Our website is intended to give you with information about our products and services, as well as to provide you with a hassle-free energy efficiency experience.</p>
      <p>Using the navigation bar, you can easily access all the information you need about our company, including when we started, how we came to be, and who the owners are. We believe in being transparent with our customers and users, which is why we provide safe info for you to read about.</p>
      <p>We are proud to be an environmentally responsible firm, and our dedication to sustainability is obvious in everything we do. We believe in doing our part to make the world a better place, from energy-saving goods to environmentally sensitive manufacturing techniques.  </p>
      <p>Thank you for considering Ziphon LTD for your energy-saving requirements. Please explore our website and contact us if you have any questions or comments. Remember that you may always return to our homepage by using the navigation bar.
</p>
                <p className='bwtpara'>
                Make sure you Follow @ZiphonApp for our updates
                </p>
        </div>
        <div className='logos'>
        <a className='logo1' href='https://twitter.com'>
         <img  src={TwitterSquare} alt='twitterlogo'></img>
        </a>
        <a className='logo2' href='https://Instagram.com'>
         <img src={InstagramSquare} alt='twitterlogo'></img> 
        </a>
        <a className='logo3' href='https://Facebook.com'>
         <img src={FacebookSquare} alt='twitterlogo'></img> 
        </a>
      </div>
        </div>
        <div className='devs'>
          <h1>Developers</h1>
          <p>Group 56 @BrunelComputerScience</p>
          <p>Dev1:Vivek Kotedia || Dev2:Ibrahim Farrah || Dev3:Liam Havill  </p>
          <p>Dev4:Nivethan Nithiyakumar || Dev5:Muhammed Jabir || Dev6:KAne Kerr || Dev7:Vansh Goyal </p>
      </div>
      
    </div>
  );
};
export { AboutUs }
export default AboutUs;