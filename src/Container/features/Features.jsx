import React from "react";
import "./features.css";
import { Feature } from "../../Components";

const featuresData = [
  {
    title: "One-way data binding",
    text: "React's one-way data binding makes it easier to manage and manipulate data within components. With one-way data flow, changes to data can only occur in one direction, preventing unexpected changes and making code more predictable.",
  },
  {
    title: "React Native",
    text: "React Native is a framework for building native mobile apps using React. With React Native, developers can use the same codebase to build apps for both iOS and Android platforms, which reduces development time and costs.",
  },
  {
    title: "Server-side rendering",
    text: "React's server-side rendering (SSR) allows developers to render React components on the server before sending them to the client. This feature improves page load times, search engine optimization (SEO), and accessibility.",
  },
  {
    title: "React Hooks",
    text: "React Hooks is a feature that allows developers to use state and other React features without writing classes. With Hooks, developers can reuse stateful logic across components and build more modular and reusable code.",
  },
];

export const Features = () => {
  return (
    <div className="react__features section__padding" id="Features">
      <div className="react__features-heading">
        <h1 className="gradient__text">
          Empower your web development with React
        </h1>
        <p>npx create-react-app</p>
      </div>
      <div className="react__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
