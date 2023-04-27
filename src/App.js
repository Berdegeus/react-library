import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Fearures,
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
      <div>
        <Brand />
        <WhatReact />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
