import { Outlet, Link, useLocation } from "react-router-dom";
import './navbar.css'
import Logo from '../../Assets/Images/ziphonLogo.png';



const Navbar = () => {

  const location = useLocation();   // this will help recognise which page your in

  function isLinkActive(pathname) {
    if (location.pathname === pathname) {
      return 'active';
    } else {
      return '';
    }
  }

  return (
    <>
      <div className="navbar" id="navbar"> {/*Navigation Bar*/}

        <nav>
          <ul>
            <img alt="Logo" src={Logo} className="logo" />
            <Link to="/Home" className={isLinkActive('/Home')}>Home</Link>
            <Link to="/About" className={isLinkActive('/About')}>About</Link>
            <Link to="/Tips&Tricks" className={isLinkActive('/Tips&Tricks')}>Tips&Tricks</Link>
            <Link to="/Form" className={isLinkActive('/form')}>Energy Consumption</Link>
            <Link to="/Logout" className="split">Logout</Link>
            <Link to="/Dashboard" className="split">Dashboard</Link>
          </ul>
        </nav>

      </div>

      <Outlet />
    </>
  )
};

export default Navbar;
