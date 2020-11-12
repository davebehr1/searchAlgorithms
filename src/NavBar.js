import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { ProgressContext } from "./Context";
export function NavBar() {
  const { pathname } = useLocation();

  const { unlocked, setUnlocked } = useContext(ProgressContext);

  // setUnlocked(["hashing"]);

  console.log("unlocked:", unlocked);

  useEffect(() => {}, [JSON.parse(localStorage.getItem("badges"))]);

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
            pathname === "/linear-search" && classes.active,
            !localStorage.getItem("unlocked").includes("linear-search") &&
              classes.disabled
          )}
        >
          Linear Search
        </Link>
        <Link
          to="/hashing"
          disable={!localStorage.getItem("unlocked").includes("hashing")}
          className={clsx(
            classes.link,
            pathname === "/hashing" && classes.active,
            !localStorage.getItem("unlocked").includes("hashing") &&
              classes.disabled
          )}
        >
          Hashing
        </Link>
      </div>
    </div>
  );
}
