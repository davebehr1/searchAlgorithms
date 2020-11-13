import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";
import { ProgessController } from "./Context";

function App() {
  useEffect(() => {
    localStorage.setItem("unlocked", JSON.stringify(["binary-search"]));
    localStorage.setItem(
      "badges",
      JSON.stringify({ binary: false, linear: false, hashing: false })
    );
  }, []);
  return (
    <Router>
      <ProgessController>
        <Routes />
      </ProgessController>
    </Router>
  );
}
export default App;
