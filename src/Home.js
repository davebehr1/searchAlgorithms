import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

export function Home() {
  const clipPaths = [
    "polygon(0% 0%, 7% 100%, 87% 88%, 94% 4%)",
    "polygon(0% 15%, 7% 100%, 88% 68%, 94% 0%)",
    "polygon(0% -1%, 19% 79%, 84% 64%, 102% -13%)",
  ];
  return (
    <div className={classes.Wrapper}>
      <div
        className={classes.tagwrap}
        style={{ position: "absolute", top: "20px" }}
      >
        <div
          className={classes.buttonWrapper}
          style={{
            clipPath: clipPaths[1],
          }}
        >
          <div
            className={classes.button}
            style={{ clipPath: clipPaths[1] }}
          ></div>
        </div>
      </div>

      <h1 className={classes.Heading}>Welcome detective</h1>

      <h4 className={classes.subHeading}>What will you investigate next</h4>

      <div className={classes.tagwrap}>
        <div
          className={classes.buttonWrapper}
          style={{ clipPath: clipPaths[0] }}
        >
          <div className={classes.button} style={{ clipPath: clipPaths[0] }}>
            <Link to={"/binary-search"} className={classes.Link}>
              Binary Search
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.tagwrap}>
        <div
          className={classes.buttonWrapper}
          style={{ clipPath: clipPaths[1] }}
        >
          <div className={classes.button} style={{ clipPath: clipPaths[1] }}>
            <Link to={"/linear-search"} className={classes.Link}>
              Linear Search
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.tagwrap}>
        <div
          className={classes.buttonWrapper}
          style={{ clipPath: clipPaths[2] }}
        >
          <div className={classes.button} style={{ clipPath: clipPaths[2] }}>
            <Link to={"/hashing"} className={classes.Link}>
              Hashing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
