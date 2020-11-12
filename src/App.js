import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";

function App() {
  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(["binary-search"]));
  }, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}
export default App;
