import React from "react";
import "./game.css";
import Board from "../Board/Board";
import calculateWinner from "../calculateWinner/calculateWinner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      stepsCount: 0
    };
  }

  handleClick(i) {
    const { history, stepNumber, xIsNext, stepsCount } = this.state;
    const historyItem = history.slice(0, stepNumber + 1);
    const current = historyItem[historyItem.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    let stepsCounter = stepsCount + 1;
    this.setState({
      history: historyItem.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: historyItem.length,
      xIsNext: !xIsNext,
      stepsCount: stepsCounter
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { history, stepNumber, xIsNext, stepsCount } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button
            className="btn btn-gradient"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (stepsCount === 9) {
      status = "Nobody winner";
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
