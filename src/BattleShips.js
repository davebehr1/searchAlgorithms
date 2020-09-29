import React from "react";
import classes from "./BattleShips.module.css";
const dictionary = {
  0: null,
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
};

export function BattleShips() {
  const gridGenerator = () => {
    console.log("gen grid");
    let grid = [];
    let length = 11;
    for (let i = 0; i < length; i++) {
      let row = [];
      for (let j = 0; j < length; j++) {
        if (i === 0) {
          row.push({ status: "label", label: dictionary[j] });
        } else if (i !== 0 && j === 0) {
          row.push({ status: "label", label: i });
        } else {
          row.push({ status: "empty", hover: false, hit: false, type: null });
        }
      }
      grid.push(row);
    }
    return grid;
  };
  function drawGrid() {
    console.log("hello");
    let grid = gridGenerator();
    return grid.map((row, i) => {
      return row.map((square, j) => {
        return (
          <div
            className={classes.gridBlock}
            key={`${i}${j}`}
            // i={i}
            // j={j}
            // square={square}
            // shipsSet={shipsSet}
            // handleHover={this.handleHover}
            // handleClick={this.handleClick}
          />
        );
      });
    });
  }

  return drawGrid();
}
