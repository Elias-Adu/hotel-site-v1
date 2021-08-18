import React, { useState } from "react";
import logo from "../../assets/img/unicorn-Logo.svg";
import "./Navbar.css";
import { links, social } from "./navbarData";
// import { FaAlignRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={isNavOpen ? "nav-links nav-links-open" : "nav-links"}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className={isNavOpen && "fade"}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <section className="landing">
        <img src={logo} alt="hotel logo" className="logo" />
        <h1>Unicorn</h1>
      </section> */}
    </nav>
  );
};

export default Navbar;
