import React, { useContext } from "react";
import styled from "styled-components";
import DiceContext from "../context/DiceContext";

function RoleDice() {
  const { handleRollDice, diceNumber } = useContext(DiceContext);

  return (
    <DiceContainer>
      <div className="dice" onClick={handleRollDice}>
        <img src={`/Image/Dice/dice_${diceNumber}.png`} alt="Dice Image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .dice {
    cursor: pointer;
    width: 190px;
    height: 190px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: 24px;
  }
`;
