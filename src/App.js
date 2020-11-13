import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";
import { ProgessController } from "./Context";

function App() {
  useEffect(() => {
    if (localStorage.getItem("unlocked") === null) {
      console.log("setting");
      localStorage.setItem("unlocked", JSON.stringify(["linear-search"]));
      localStorage.setItem(
        "badges",
        JSON.stringify({ binary: false, linear: false, hashing: false })
      );
    }
  }, []);
  return (
    <ProgessController>
      <Router>
        <Routes />
      </Router>
    </ProgessController>
  );
}
export default App;
