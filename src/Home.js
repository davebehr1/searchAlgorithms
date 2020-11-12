import React from "react";
import { Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { ClipButton } from "./Components/ClipButtonLink";
import Particles from "react-particles-js";
import { Badge } from "./Components/Badge";

export const clipPaths = [
  "polygon(0% 0%, 7% 100%, 87% 88%, 94% 4%)",
  "polygon(0% 15%, 7% 100%, 88% 68%, 94% 0%)",
  "polygon(0% -1%, 19% 79%, 84% 64%, 102% -13%)",
];
export function Home() {
  return (
    <>
      <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            color: {
              value: "#ffe527",
            },
            number: {
              value: 30,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      {localStorage.setItem("key", "value")}
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Welcome detective</h1>
        <Box>
          <Badge />
          <Badge />
          <Badge />
        </Box>
        <h4 className={classes.subHeading}>What will you investigate next</h4>

        <ClipButton
          clipPath={clipPaths[0]}
          link={"/binary-search"}
          label={"binary search"}
        />
        <ClipButton
          clipPath={clipPaths[1]}
          link={"/linear-search"}
          label={"Linear Search"}
        />
        <ClipButton
          clipPath={clipPaths[2]}
          link={"/hashing"}
          label={"Hashing"}
        />
      </div>
    </>
  );
}
