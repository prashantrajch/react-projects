import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import RoleDice from "./RoleDice";
import DiceContext from "../context/DiceContext";
import Rules from "./Rules";

function GamePage() {
  const { handleReset, showRules, setShowRules } = useContext(DiceContext);
  return (
    <MainContainer>
      <Header />
      <RoleDice />
      <div className="footer-btns">
        <OutlineButton onClick={handleReset}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules(!showRules)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePage;

const MainContainer = styled.main`
  padding: 10px;
  .footer-btns {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Button = styled.button`
  width: 220px;
  border-radius: 5px;
  padding: 10px 18px;
  background-color: #000;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.4s ease-in;
  &:hover {
    background-color: white;
    border-color: #000;
    color: #000;
  }
`;

const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
