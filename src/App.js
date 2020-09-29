import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { BinarySearch } from "./BinarySearch";
import classes from "./navbar.module.css";
import { Hashing } from "./Hashing";
import { LinearSearch } from "./LinearSearch";
function App() {
  return (
    <Router>
      <div className="App">
        <div className={classes.navbar}>
          <h1 className={classes.title}>Searching Algorithms</h1>
          <Link to="/binary-search" className={classes.link}>
            Binary Search
          </Link>

          <Link to="/linear-search" className={classes.link}>
            Linear Search
          </Link>

          <Link to="/hashing" className={classes.link}>
            Hashing
          </Link>
        </div>
        <Switch>
          <Route path="/binary-search">
            <BinarySearch />
          </Route>
          <Route path="/linear-search">
            <LinearSearch />
          </Route>
          <Route path="/hashing">
            <Hashing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
