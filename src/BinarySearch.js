import React, { useState } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { BinaryQuiz } from "./BinaryQuiz";
import { Typography } from "@material-ui/core";

export function BinarySearch() {
  const [arr, setArr] = useState([
    { number: 1, color: "transparent" },
    { number: 2, color: "transparent" },
    { number: 3, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 5, color: "transparent" },
    { number: 6, color: "transparent" },
    { number: 7, color: "transparent" },
    { number: 8, color: "transparent" },
    { number: 9, color: "transparent" },
  ]);

  const [searchValue, setSearchValue] = useState(8);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const search = async () => {
    let x = parseInt(searchValue);

    let start = 0,
      end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      let tempArr = [...arr];

      tempArr.forEach((item, index) => {
        item.color = "transparent";
      });
      tempArr[mid].color = "#2F486E";

      console.log(tempArr);
      setArr(tempArr);

      // If element is present at mid, return True
      if (arr[mid].number === x) {
        console.log(`found ${x}`);
        return true;
      }
      // Else look in left or right half accordingly
      else if (arr[mid].number < x) start = mid + 1;
      else end = mid - 1;
      await delay(800);
    }

    return false;
  };

  function handleSubmit(event) {
    search();
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>BinarySearch</h1>
      <SimpleTabs
        background={
          <div className={classes.background}>
            <Typography variant="body1">
              Binary Search is searching technique which works on Divide and
              Conquer approach. It used to search any element in a sorted array.
              As compared to linear, binary search is much faster with Time
              Complexity of O(logN) whereas linear search algorithm works in
              O(N) time complexity
            </Typography>

            <ReactPlayer
              url="https://www.youtube.com/watch?v=T2sFYY-fT5o"
              style={{ margin: "30px" }}
            />
          </div>
        }
        prosAndCons={
          <>
            <h1>Pros</h1>
            <ul>
              <li>
                Binary search is an optimal searching algorithm Binary search is
                easy to implement
              </li>
            </ul>
            <h1>Cons</h1>
            <ul>
              <li>
                Binary search is an optimal searching algorithm Binary search is
                easy to implement
              </li>
            </ul>
          </>
        }
        example={
          <div>
            <div className={classes.array}>
              {arr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classes.arrayItem}
                    style={{ background: item.color }}
                  >
                    {item.number}
                  </div>
                );
              })}
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
              <label>
                <input
                  type="number"
                  min="1"
                  max="9"
                  value={searchValue}
                  onChange={handleChange}
                  className={classes.input}
                />
              </label>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"search"}
                clipPath={clipPaths[0]}
                padding="20px"
                fontSize="20px"
              />
            </form>
          </div>
        }
        performance={
          <>
            <h2>
              The following list below displays the Worst-case, Best-case and
              Average performance for the complexity of linear search in Big O
              notation
            </h2>
            <ul>
              <li>Worst-case performance O(log n)</li>
              <li>Worst-case performance O(log n)</li>
              <li>Worst-case performance O(log n)</li>
            </ul>

            <h3>
              Just like linear search, the binary search algorithm best-case
              performance is O(1) however they differ in their average and worst
              cases, where binary search out performs linear search. In terms of
              iterations, no search algorithm that works only by comparing
              elements can exhibit better average and worst-case performance
              than binary search
            </h3>
          </>
        }
        quiz={<BinaryQuiz />}
      />
    </div>
  );
}
