import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
export function NavBar() {
  const { pathname } = useLocation();

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <Link
          to="/"
          className={clsx(
            classes.link,
            classes.heading,
            pathname === "/" && classes.active
          )}
        >
          <h1 className={classes.title}>Searching Algorithms</h1>
        </Link>
        <Link
          to="/binary-search"
          className={clsx(
            classes.link,
            pathname === "/binary-search" && classes.active
          )}
        >
          Binary Search
        </Link>
        <Link
          to="/linear-search"
          className={clsx(
            classes.link,
            pathname === "/linear-search" && classes.active
          )}
        >
          Linear Search
        </Link>
        <Link
          to="/hashing"
          className={clsx(
            classes.link,
            pathname === "/hashing" && classes.active
          )}
        >
          Hashing
        </Link>
      </div>
    </div>
  );
}
