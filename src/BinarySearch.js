import React, { useState } from "react";
import classes from "./search.module.css";

export function BinarySearch() {
  const [arr, setArr] = useState([
    { number: 1, color: "#C3CCD9" },
    { number: 3, color: "#C3CCD9" },
    { number: 5, color: "#C3CCD9" },
    { number: 7, color: "#C3CCD9" },
    { number: 8, color: "#C3CCD9" },
    { number: 9, color: "#C3CCD9" },
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
      console.log(mid);
      tempArr.forEach((item, index) => {
        item.color = "#C3CCD9";
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
      <p className={classes.description}>
        Binary Search is searching technique which works on Divide and Conquer
        approach. It used to search any element in a sorted array. As compared
        to linear, binary search is much faster with Time Complexity of O(logN)
        whereas linear search algorithm works in O(N) time complexity.{" "}
      </p>
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
            value={searchValue}
            onChange={handleChange}
            className={classes.input}
          />
        </label>
        <input type="submit" value="Search" className={classes.button} />
      </form>
    </div>
  );
}
