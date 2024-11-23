import './footer.css';
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../Assets/Images/ziphonLogo.png";

function Footer() {
  return (
    <div className="footer">
      <h3>More From Us</h3>
      <p>We save your money and the worlds energy.</p>
      <br />
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Home">Services</a></li>
        <li><a href="/Home">Contact Us</a></li>
      </ul>
      <ul className="social-icons">
      <a href="https://www.facebook.com" class="fa fa-facebook"></a>
      <a href="https://twitter.com" class="fa fa-twitter"></a>
      <a href="https://www.instagram.com" class="fa fa-instagram"></a>
      </ul>
      <img src={logo}></img>
      <p>&copy; ZiphonLtd.</p>
    </div>
  );
}

export default Footer;