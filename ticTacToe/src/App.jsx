import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SelectMode from "./components/SelectMode/SelectMode";
import PlayBoard from "./components/playBoard/PlayBoard";
import Result from "./components/Result/Result";

function App() {
  const [mode, setMode] = useState("");
  const [player, setPlayer] = useState("");
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setMode("");
    setPlayer("");
    setWinner("");
  };

  return (
    <div>
      <Navbar />
      {player === "" ? (
        <SelectMode setMode={setMode} setPlayer={setPlayer} mode={mode} />
      ) : winner ? (
        <Result winner={winner} onReplay={resetGame} />
      ) : (
        <PlayBoard
          player={player}
          winner={winner}
          setWinner={setWinner}
          mode={mode}
        />
      )}
    </div>
  );
}

export default App;
