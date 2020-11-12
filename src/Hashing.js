import React, { useState, useEffect } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { HashingQuiz } from "./HashingQuiz";

export function Hashing() {
  useEffect(() => {
    let values = [];
    values = JSON.parse(localStorage.getItem("done"));
    if (values.includes("hashing") === false) {
      values.push("hashing");
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
    console.log("submit");
    search();
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Hashing</h1>
      <SimpleTabs
        background={
          "Unlike Linear and binary search Hashing is the transformation of a string of characters into a usually shorter fixed-length value or key that represents the original string. This is done through a data Structure which is designed to use a special function called the Hash function. A Hash function is used to map a given value with a particular key for faster access of elements. The efficiency of mapping depends of the efficiency of the hash function used. In other words, a hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are used to index a fixed-size table called a hash table. Use of a hash function to index a hash table is called hashing or scatter storage addressing. Hash functions and their associated hash tables are used in data storage and retrieval applications to access data in a small and nearly constant time per retrieval, and storage space only fractionally greater than the total space required for the data or records themselves. Hashing is a computationally and storage space efficient form of data access which avoids the non-linear access time of ordered and unordered lists and structured trees, and the often-exponential storage requirements of direct access of state spaces of large or variable-length keys. It is also used in many encryption algorithms"
        }
        prosAndCons={
          <>
            <h1>Pros</h1>
            <ul>
              <li>fast lookup</li>
              <li>fast indexing</li>
            </ul>
            <h1>Cons</h1>
            <ul>
              <li>
                Hash tables can be more difficult to implement than linear and
                binary search
              </li>
              <li>
                choosing an appropriate hash functions can be a challenge{" "}
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
              The following list below displays the Worst-case and Average
              performance for the different operations when using hashing in Big
              O notation.
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
        quiz={<HashingQuiz />}
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=KyUTuwz_b7Q"
        style={{ margin: "30px" }}
      />
    </div>
  );
}
