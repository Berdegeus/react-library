import React from "react";
import "./possibility.css";
import DevImage from "../../assets/Notebook.svg";

export const Possibility = () => {
  return (
    <div className="react__possibility section__padding" id="possibility">
      <div className="react__possibility-image">
        <img src={DevImage} alt="possibility" />
      </div>
      <div className="react__possibility-content">
        <h1 className="gradient__text">the future of UI is now.</h1>
        <p>
          React was created by Meta (formerly Facebook) in 2011 to address the
          challenges of building complex and performant web applications. Its
          virtual DOM and component-based architecture have made it a popular
          choice for building fast, efficient, and modular user interfaces.
          Today, React is a driving force in the web development community, and
          its focus on the future of UI is now shaping the way we build web
          applications.
        </p>
        <h4>Build your dream project now!</h4>
      </div>
    </div>
  );
};

export default Possibility;
