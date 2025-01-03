import React, { useState, useEffect } from "react";
import "./playBoard.css";

const winnerLogic = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const PlayBoard = ({ player, setWinner, winner, mode }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(player === "x");
  const [isBotTurn, setIsBotTurn] = useState(false);

  const handleClick = (index) => {
    if (board[index] !== null || winner) return;
    let newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    if (mode === "bot") {
      setIsBotTurn(true);
    }
  };

  const checkWinner = () => {
    for (let row = 0; row < winnerLogic.length; row++) {
      let [a, b, c] = winnerLogic[row];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return false;
      }
    }

    if (!board.includes(null) && !winner) {
      setWinner("draw");
      return false;
    }

    return true;
  };

  useEffect(() => {
    const checkWin = checkWinner();
    if (mode == "bot" && isBotTurn && checkWin) {
      handleBotMove();
    }
  }, [board, isBotTurn, isXTurn]);

  const handleBotMove = () => {
    const newBoard = [...board];
    const emptySpots = newBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    setTimeout(() => {
      let randomNumber = randomNumberGenerate(emptySpots);

      if (board[randomNumber] !== null) {
        randomNumber = randomNumberGenerate();
      }
      newBoard[randomNumber] = isXTurn ? "X" : "O";
      setBoard(newBoard);
      setIsXTurn(!isXTurn);
      setIsBotTurn(false);
    }, 1000);
  };

  function randomNumberGenerate(emptySpots) {
    return emptySpots[Math.floor(Math.random() * emptySpots.length)];
  }

  return (
    <div className="playBoard">
      <div className="player-details">
        <div className="players">
          <span className={`Xturn ${isXTurn ? "active" : ""}`}>X's Turn</span>
          <span className={`Oturn ${!isXTurn ? "active" : ""}`}>O's Turn</span>
          <div
            className="slider"
            style={!isXTurn ? { left: "50%" } : { left: "0%" }}
          ></div>
        </div>
      </div>
      <div className="playArea">
        {board.map((item, index) => (
          <div
            key={index}
            className="box"
            onClick={() => !isBotTurn && handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayBoard;
