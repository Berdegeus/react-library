import React from "react";
import reactLogo from "../../assets/Logo-name2.png";
import "./footer.css";

const Footer = () => (
  <div className="react__footer section__padding">
    <div className="react__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others?
      </h1>
    </div>

    <div className="react__footer-btn">
      <p>NPX create-react-project</p>
    </div>

    <div className="react__footer-links">
      <div className="react__footer-links_logo">
        <img src={reactLogo} alt="react_logo" />
        <p>
          Bernardo Roorda 2023, <br /> All Rights Reserved
        </p>
      </div>
      <div className="react__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Get in touch</h4>
        <p>Bernardo Roorda de Geus</p>
        <p>(41) 99119-8023</p>
        <p>Berdegeus@gmail.com</p>
      </div>
    </div>

    <div className="react__footer-copyright">
      <p>@2023 Meta. All rights reserved.</p>
      <p>(This is only a Portifolio site)</p>
    </div>
  </div>
);

export default Footer;
