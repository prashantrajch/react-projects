import React from "react";
import "./selectMode.css";

function SelectMode({ setMode, setPlayer, mode }) {
  return (
    <div className="selectBox container">
      {mode === "" ? (
        <div className="select-mode">
          <h2 className="select-title">Select Mode</h2>
          <div className="mode-options options">
            <button
              className="single-player btn"
              onClick={() => setMode("single")}
            >
              Single Player
            </button>
            <button
              className="multi-player btn"
              onClick={() => setMode("multi")}
            >
              Multiplayer
            </button>
            <button className="bot-player btn" onClick={() => setMode("bot")}>
              Bot
            </button>
          </div>
        </div>
      ) : (
        <div className="select-type">
          <h2 className="select-title">Select what you want to be?</h2>
          <div className="player-options options">
            <button className="btn" onClick={() => setPlayer("x")}>
              Player (X)
            </button>
            <button className="btn" onClick={() => setPlayer("o")}>
              Player (O)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectMode;
