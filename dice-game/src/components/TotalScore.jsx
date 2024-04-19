import React, { useContext } from "react";
import styled from "styled-components";
import DiceContext from "../context/DiceContext";

function TotalScore() {
  const { totalScore } = useContext(DiceContext);

  return (
    <ScoreContainer>
      <h3>{totalScore}</h3>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;
  h3 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
