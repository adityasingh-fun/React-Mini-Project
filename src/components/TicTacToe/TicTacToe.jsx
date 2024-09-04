import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState(null);
  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  };

  const getWinner = (squares) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleOnClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    const copySquares = [...squares];
    if (getWinner(squares) || copySquares[getCurrentIndex]) return;
    copySquares[getCurrentIndex] = isXTurn ? "X" : "O";
    setSquares(copySquares);
    setIsXTurn(!isXTurn);
  };

  useEffect(() => {
    if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("Match Draw. Play Again!");
    } else {
      setStatus(`${isXTurn ? "X" : "O"}'s Turn`);
    }
  }, [isXTurn]);
  console.log(squares);
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <button onClick={() => handleOnClick(0)}>{squares[0]}</button>
        <button onClick={() => handleOnClick(1)}>{squares[1]}</button>
        <button onClick={() => handleOnClick(2)}>{squares[2]}</button>
      </div>
      <div className="row">
        <button onClick={() => handleOnClick(3)}>{squares[3]}</button>
        <button onClick={() => handleOnClick(4)}>{squares[4]}</button>
        <button onClick={() => handleOnClick(5)}>{squares[5]}</button>
      </div>
      <div className="row">
        <button onClick={() => handleOnClick(6)}>{squares[6]}</button>
        <button onClick={() => handleOnClick(7)}>{squares[7]}</button>
        <button onClick={() => handleOnClick(8)}>{squares[8]}</button>
      </div>
      <div className="status">{status}</div>
      <div className="restart-button">
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default TicTacToe;
