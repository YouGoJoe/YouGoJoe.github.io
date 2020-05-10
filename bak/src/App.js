import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="../noops/hexbot-cursor-pointer.html">Cursor pointer</a>
        <a href="../noops/hexbot-snake.html">Snake</a>
        <a href="../noops/auto-snake.html">Auto-Snake</a>
        <a href="../hackathon-gyro/">Hackathon 2019</a>
      </header>
    </div>
  );
}

export default App;
