import React from "react";
import { Contact, Features, Skill, Header } from "./Container";
import { Brand, Navbar } from "./Components";
import "./App.css";
import homebb from "./assets/homebb.png";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Skill />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
