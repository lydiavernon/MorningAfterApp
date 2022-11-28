import { Link } from "react-router-dom";
import "../Header/Header.scss";
import logo from "../../assets/morningafter.png";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <img className="logo" src={logo} alt="logo" />
        <Link to="/">
          <h3 className="nav__link">HOME</h3>
        </Link>
        <Link to="/about">
          <h3 className="nav__link">ABOUT</h3>
        </Link>
        <Link to="/events">
          <h3 className="nav__link">PROJECTS+EVENTS</h3>
        </Link>
        <Link to="/management">
          <h3 className="nav__link">MANAGEMENT</h3>
        </Link>
        <Link to="/radio">
          <h3 className="nav__link">RADIO</h3>
        </Link>
        {/* <Link to="/contact">
          <h3 className="nav__link">CONTACT</h3>
        </Link> */}
      </nav>
      <article className="contact">
        <h3 className="contact__title">CONTACT</h3>
        <p className="contact__text">info@morningafter.com</p>
      </article>
    </div>
  );
};

export default Header;
