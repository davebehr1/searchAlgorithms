import React, { useState } from "react";
import classes from "./search.module.css";

export function LinearSearch() {
  const [arr, setArr] = useState([
    { number: 1, color: "#C3CCD9" },
    { number: 2, color: "#C3CCD9" },
    { number: 3, color: "#C3CCD9" },
    { number: 4, color: "#C3CCD9" },
    { number: 5, color: "#C3CCD9" },
    { number: 6, color: "#C3CCD9" },
    { number: 7, color: "#C3CCD9" },
    { number: 8, color: "#C3CCD9" },
    { number: 9, color: "#C3CCD9" },
  ]);

  const [searchValue, setSearchValue] = useState(8);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const search = async () => {
    for (var i = 0; i < arr.length; i++) {
      let tempArr = [...arr];

      tempArr.forEach((item, index) => {
        item.color = "#C3CCD9";
      });
      tempArr[i].color = "#2F486E";

      setArr(tempArr);

      if (arr[i] == searchValue) return i;
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
      <h1 className={classes.heading}>Linear Search</h1>
      <p className={classes.description}>
        Linear search is rarely used practically because other search algorithms
        such as the binary search algorithm and hash tables allow significantly
        faster searching comparison to Linear search.
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
            min="1"
            max="9"
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
