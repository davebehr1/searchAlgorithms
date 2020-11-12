import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { ClipButton } from "./Components/ClipButtonLink";
import Particles from "react-particles-js";
import { Badge } from "./Components/Badge";
import BadgeSvg from "./Components/badgeSvg";

export const clipPaths = [
  "polygon(0% 0%, 7% 100%, 87% 88%, 94% 4%)",
  "polygon(0% 15%, 7% 100%, 88% 68%, 94% 0%)",
  "polygon(0% -1%, 19% 79%, 84% 64%, 102% -13%)",
];
export function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("done") === null) {
      localStorage.setItem("done", JSON.stringify(["binary-search"]));
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
          <h1 className={classes.Heading}>Welcome detective</h1>
          <Box>
            <BadgeSvg fill={true} label={"B.S"} />
            <BadgeSvg fill={false} label={"L.S"} />
            <BadgeSvg fill={false} label={"H.S"} />
          </Box>
          <h4 className={classes.subHeading}>What will you investigate next</h4>

          <ClipButton
            clipPath={clipPaths[0]}
            link={"/binary-search"}
            label={"binary search"}
            disable={!localStorage.getItem("done").includes("binary-search")}
          />
          <ClipButton
            clipPath={clipPaths[1]}
            link={"/linear-search"}
            label={"Linear Search"}
            disable={!localStorage.getItem("done").includes("linear-search")}
          />
          <ClipButton
            clipPath={clipPaths[2]}
            link={"/hashing"}
            label={"Hashing"}
            disable={!localStorage.getItem("done").includes("hashing")}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
