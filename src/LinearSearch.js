import React, { useState, useEffect } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";

export function LinearSearch() {
  useEffect(() => {
    let values = [];
    values = JSON.parse(localStorage.getItem("done"));
    if (values.includes("linear-search") === false) {
      values.push("linear-search");
    }

    localStorage.setItem("done", JSON.stringify(values));
  }, []);
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
    for (var i = 0; i < arr.length; i++) {
      let tempArr = [...arr];

      tempArr.forEach((item, index) => {
        item.color = "transparent";
      });
      tempArr[i].color = "#2F486E";

      setArr(tempArr);

      if (arr[i].number === parseInt(searchValue)) return true;
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
      <SimpleTabs
        background={
          "Linear search also known as sequential search is a simple searching algorithm for finding an element within a list.  The way this searching algorithm works is that every element in the list is checked sequentially starting from index 0 of an array if a match is found then that particular element is returned otherwise a null or -1 is return to indicate that the element was not found in the array that was being searched. In linear search you do not have to sort the array before the search takes place and thus no preprocessing of data is necessary."
        }
        prosAndCons={
          <>
            <h1>Pros</h1>
            <ul>
              <li>Linear search is simple to implement</li>
              <li>It is practical when the list has only a few elements.</li>
              <li>
                The list needs no preprocessing and can be search when
                unordered.
              </li>
            </ul>
            <h1>Cons</h1>
            <ul>
              <li>
                Linear search can be slow when used on large list (other
                searching algorithms such as the binary search algorithm and
                hash tables allow significantly faster searching compared to
                Linear search).
              </li>
              <li>
                Linear search requires that all elements of a list be search
                before it can determine if an element is within that list for
                the worst case.
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
              notation.
            </h2>
            <ul>
              <li>Worst-case performance O (n)</li>
              <li>Best-case performance O (1)</li>
              <li>Average performance O((n+1)/2) </li>
            </ul>

            <h3>
              This means that linear search runs at worst in linear time and
              makes at most n comparisons, where n is the length of the list. If
              each element is equally likely to be searched, then linear search
              has an average case of (n+1)/n comparisons, but the average case
              can be affected if the search probabilities for each element vary.
              Thus as a result other searching algorithms may be faster than
              linear search for instance binary search however in practice even
              on medium sized arrays (around 100 items) it might be infeasible
              to use anything else as the initial time to preprocess the
              data(sort) can be comparable to linear time taken to search the
              array and therefore it is a practical searching algorithm if the
              data being searched is not too large.
            </h3>
          </>
        }
        quiz={<h1>Quiz</h1>}
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=aqFTmGbKajI"
        style={{ margin: "30px" }}
      />
    </div>
  );
}
