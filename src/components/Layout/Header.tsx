import { Link } from "wouter";
import {List, X } from "@phosphor-icons/react";

import logo from "../../assets/logo.svg";

import { NAV_LINKS } from "../../utils/constants";
import "./Header.css";
import NavLink from "../NavLink/NavLink";

function Header() {
  const toggleNavBar = () => {
    const navBar = document.querySelector(".nav");
    navBar?.classList.toggle("nav_visible");
  };

  return (
    <header className="header">
      <div className="header__item">
        {/* <div className="logo">Skanda Nexus</div> */}
        <div className="logo"><img src={logo} alt="Logo" width={85} height={85} /></div>
        <nav className="nav">
          <div className="nav__item">
            <div className="nav__header">
              <div className="logo nav__logo">Skanda Nexus</div>
              <span className="nav__icon" onClick={toggleNavBar}>
                <X size={26} color="#d8ff99" />
              </span>
            </div>
            <ul className="nav__list">
              {NAV_LINKS.map((link) => (
                <li key={link.path} onClick={toggleNavBar}>
                  <NavLink to={link.path} name={link.name} />
                </li>
              ))}
              <hr className="separator nav__separator"/>
              <Link to="/skanda-nexus-technology/contact-us" className="cta nav__cta">
                Contact Us
              </Link>
            </ul>
          </div>
        </nav>
        <span className="nav__icon" onClick={toggleNavBar}>
          <List size={26} color="#d8ff99" />
        </span>
      </div>
    </header>
  );
}

export default Header;
