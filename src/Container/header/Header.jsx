import React from "react";
import "./header.css";
import people from "../../assets/People.png";
import logo from "../../assets/logo.png";

const Header = () => (
  <div className="react__header section__padding" id="home">
    <div className="react__header-content">
      <h1 className="gradient__text">
        Let's Build Something amazing with the React Library
      </h1>
      <p>
        Join the React community and experience the power of effortless UI
        development. With React, you'll create stunning interfaces with ease and
        speed. Get started today and see for yourself why React is the go-to
        framework for modern web development!
      </p>
      <div className="react__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="react__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="react__header-image">
      <img src={logo} alt="logo" />
    </div>
  </div>
);

export default Header;
