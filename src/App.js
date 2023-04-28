import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatReact,
} from "./Container";

import { CTA, Brand, Navbar } from "./Components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatReact />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
