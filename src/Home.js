import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { ClipButton } from "./Components/ClipButtonLink";
import Particles from "react-particles-js";
import BadgeSvg from "./Components/badgeSvg";
import "./GlitchEffect.sass";

export const clipPaths = [
  "polygon(0% 0%, 7% 100%, 87% 88%, 94% 4%)",
  "polygon(0% 15%, 7% 100%, 88% 68%, 94% 0%)",
  "polygon(0% -1%, 19% 79%, 84% 64%, 102% -13%)",
];
export function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("unlocked") === null) {
      localStorage.setItem("unlocked", JSON.stringify(["binary-search"]));
    }

    if (localStorage.getItem("badges") === null) {
      localStorage.setItem(
        "badges",
        JSON.stringify({ binary: false, linear: false, hashing: false })
      );
    }

    setMounted(true);
  }, []);
  if (mounted) {
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

        <div className={classes.Wrapper}>
          <div className={"wrapper"}>
            <h1 className={"glitch"}>Welcome David</h1>
          </div>
          <Box>
            <BadgeSvg
              fillbadge={JSON.parse(localStorage.getItem("badges")).binary}
              label={"B.S"}
            />
            <BadgeSvg
              fillbadge={JSON.parse(localStorage.getItem("badges")).linear}
              label={"L.S"}
            />
            <BadgeSvg
              fillbadge={JSON.parse(localStorage.getItem("badges")).hashing}
              label={"H.S"}
            />
          </Box>
          <h4 className={classes.subHeading}>
            What will you investigate next ?
          </h4>

          <ClipButton
            clipPath={clipPaths[0]}
            link={"/binary-search"}
            label={"binary search"}
            disable={
              !localStorage.getItem("unlocked").includes("binary-search")
            }
          />
          <ClipButton
            clipPath={clipPaths[1]}
            link={"/linear-search"}
            label={"Linear Search"}
            disable={
              !localStorage.getItem("unlocked").includes("linear-search")
            }
          />
          <ClipButton
            clipPath={clipPaths[2]}
            link={"/hashing"}
            label={"Hashing"}
            disable={!localStorage.getItem("unlocked").includes("hashing")}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
