import React, { useState } from "react";
import Home from "./components/Home";
import GamePage from "./components/GamePage";

function App() {
  const [isStart, setIsStart] = useState(false);

  function toggleGamePlay() {
    setIsStart(true);
  }

  return (
    <div>
      {isStart ? <GamePage /> : <Home toggleGamePlay={toggleGamePlay} />}
    </div>
  );
}

export default App;
