import { Link } from "react-router-dom";
import "../Header/Header.scss";
import logo from "../../assets/logo.png";
import ig from "../../assets/instagram.svg";
import mail from "../../assets/mail.svg";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <h3 className="nav__link">HOME</h3>
        </Link>
        <Link to="/about">
          <h3 className="nav__link">ABOUT</h3>
        </Link>
        <Link to="/events">
          <h3 className="nav__link">CREATIVE+EVENTS</h3>
        </Link>
        <Link to="/management">
          <h3 className="nav__link">MGMT</h3>
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
        <p className="contact__text">info@morningafternightbefore.com</p>
        <div className="contact__icons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@morningafternightbefore.com&su=subject_here&body=body_here"
            target="blank"
            rel="noopener"
          >
            <img src={mail} alt="instagram" className="contact__yt" />
          </a>
          <a
            href="https://instagram.com/morningafternightbefore"
            target="blank"
            rel="noopener"
          >
            <img src={ig} alt="instagram" className="contact__ig" />
          </a>
        </div>
      </article>
    </div>
  );
};

export default Header;
