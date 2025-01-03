import React from "react";
import "./result.css";

const Result = ({ winner, onReplay}) => {

  return (
    <div className="result container">
      <h1 className="select-title">Result</h1>
      <div className="wonText">
        {winner === "draw" ? "It's a draw!" : `${winner} won the game`}
      </div>
      <button className="btn" onClick={onReplay}>
        Replay
      </button>
    </div>
  );
};

export default Result;
