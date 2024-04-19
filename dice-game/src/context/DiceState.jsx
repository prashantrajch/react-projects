import { useState } from "react";
import DiceContext from "./DiceContext";

export default function DiceState({ children }) {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [error, setError] = useState(false);
  const [diceNumber, setDiceNumber] = useState(1);
  const [showRules, setShowRules] = useState(false);

  function handleSelectedNumber(value) {
    setSelectedNumber(value);
  }

  function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleRollDice() {
    let randomNumber = 0;
    setError(false);

    if (!selectedNumber) {
      setError(true);
      return;
    }

    let control = setInterval(() => {
      randomNumber = randomNumberGenerator(1, 6);
      setDiceNumber(randomNumber);
    }, 200);

    setTimeout(() => {
      clearTimeout(control);
      console.log(selectedNumber, randomNumber);
      if (selectedNumber == randomNumber) {
        setTotalScore((prev) => prev + randomNumber);
      } else setTotalScore((prev) => prev - 2);
      setSelectedNumber("");
    }, 1000);
  }

  function handleReset() {
    // console.log("im clicked");
    setTotalScore(0);
    setError(false);
    setDiceNumber(1);
    setSelectedNumber("");
  }

  return (
    <DiceContext.Provider
      value={{
        handleSelectedNumber,
        selectedNumber,
        handleRollDice,
        diceNumber,
        totalScore,
        error,
        handleReset,
        showRules,
        setShowRules,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
}
