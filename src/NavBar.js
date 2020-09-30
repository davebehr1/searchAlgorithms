import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
export function NavBar() {
  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <Link to="/" className={classes.link}>
          <h1 className={classes.title}>Searching Algorithms</h1>
        </Link>
        <Link to="/binary-search" className={classes.link}>
          Binary Search
        </Link>

        <Link to="/linear-search" className={classes.link}>
          Linear Search
        </Link>

        <Link to="/hashing" className={classes.link}>
          Hashing
        </Link>

        <Link to="/BattleShip" className={classes.link}>
          BattleShip
        </Link>

        <Link to="/Quiz" className={classes.link}>
          Quiz
        </Link>
      </div>
    </div>
  );
}
