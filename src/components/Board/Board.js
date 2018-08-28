import React from "react";
import "./board.css";
import Square from "../Square/Square";

class Board extends React.Component {
  renderSquare(i) {
    let won = false;
    if (this.props.positionOfWin && this.props.positionOfWin.indexOf(i) >= 0) {
      // If there is a winning position and positions exist on board
      won = true;
    }
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        highlight={won}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
