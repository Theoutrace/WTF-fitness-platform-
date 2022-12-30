import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "./image/logoWtf.png";
import logoW from "./image/logoWtfw.png";

function Header() {
  const [scrolladd, setScrollAdd] = useState("");
  const [logoclr, setLogoClr] = useState(true);
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 1) {
      setScrollAdd("scrolled");
      setLogoClr(() => false);
    } else {
      setScrollAdd("");
      setLogoClr(() => true);
    }
  });

  return (
    <header className={`header-class ${scrolladd}`}>
      <div>
        <img className="logo-wtf-comp" src={logoclr ? logo : logoW} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/fitness" activeclassname="active">
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink to="/nutrition" activeclassname="active">
              Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink to="/gyms" activeclassname="active">
              Gyms
            </NavLink>
          </li>
          <li>
            <NavLink to="/become-wtf-partner" activeclassname="active">
              Become WTF Partner
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeclassname="active">
              About Us
            </NavLink>
          </li>
          <button>Login</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
