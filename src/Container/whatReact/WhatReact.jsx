import React from "react";
import "./whatReact.css";
import { Feature } from "../../Components";

export const WhatReact = () => (
  <div className="react__whatreact section__margin" id="WReact">
    <div className="react__whatreact-feature">
      <Feature
        title="What is React"
        text="React is a JavaScript library for building user interfaces. It provides a declarative approach to creating interactive UIs by breaking them down into smaller, reusable components. React allows developers to write code using a component-based architecture that makes it easy to manage and update complex UIs. It also uses a virtual DOM (Document Object Model) to efficiently render changes to the UI, improving performance and user experience. React is widely used in web development and is supported by a large and active community of developers."
      />
    </div>
    <div className="react__whatreact-heading">
      <h1 className="gradient__text">
        The most popular JavaScript library for building user interfaces
      </h1>
      <p>Explore the documentation</p>
    </div>
    <div className="react__whatreact-container">
      <Feature
        title="Virtual DOM"
        text="React uses a lightweight representation of the actual DOM called the virtual DOM, which makes rendering UI components fast and efficient. With minimal updates to the UI, React delivers outstanding performance, even when dealing with complex UIs."
      />
      <Feature
        title="JSX"
        text="React uses JSX, a syntax extension that allows developers to write HTML-like code directly within JavaScript. By combining HTML and JavaScript, developers can easily create and manage UI components that are more modular, reusable, and easy to understand."
      />
      <Feature
        title="Component-based architecture"
        text="React's component-based architecture makes it easy to break down UIs into smaller, independent, and reusable components. This modular approach makes it easier to maintain, test, and debug code, resulting in faster and more efficient development."
      />
    </div>
  </div>
);

export default WhatReact;
