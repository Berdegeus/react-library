import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="react__header section_padding" id="home">
      <div className="react__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with the React Library
        </h1>
        <p>
          Join the React community and experience the power of effortless UI
          development. With React, you'll create stunning interfaces with ease
          and speed. Get started today and see for yourself why React is the
          go-to framework for modern web development!
        </p>
        <div className="react__header-content__input">
          <input type="email" placeholder="Your Email Adress"></input>
          <button className="Button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
