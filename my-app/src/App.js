import React from "react"
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Knowledge from "./Component/Knowledge";
import Projects from "./Component/Projects";

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <Home />
      <About />
      <Knowledge />
      <Projects />
    </div>
  );
}

export default App;
