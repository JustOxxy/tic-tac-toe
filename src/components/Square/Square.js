import React from "react";
import "./square.css";

function Square(props) {
  // If player has won, highlight should be true
  if (props.highlight) {
    return (
      <button className="square win-square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
}

export default Square;
