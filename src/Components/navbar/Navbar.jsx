import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logoName2 from "../../assets/Logo-name2.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#WReact">What is React?</a>
    </p>
    <p>
      <a href="#possibility">Meta</a>
    </p>
    <p>
      <a href="#Features">Case studies</a>
    </p>
    <p>
      <a href="#blog">Documentation</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="react__navbar">
      <div className="react__navbar-links">
        <div className="react__navbar-links_logo">
          <img src={logoName2} alt="logo" />
        </div>
        <div>
          <div className="react__navbar-links_container">
            <Menu />
          </div>
        </div>
      </div>
      <div className="react__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="react__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="react__navbar-menu_container scale-up-center">
            <div className="react__navbar-menu_container-links">
              <Menu />
              <div className="react__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
