import React, { useContext } from "react";
import styled from "styled-components";
import DiceContext from "../context/DiceContext";

function NumberSelector() {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const { handleSelectedNumber, selectedNumber, error } =
    useContext(DiceContext);

  return (
    <NumberSelectorContainer>
      <p className="error" isSelected={error}>
        You have not Selected any number
      </p>
      <div className="btns">
        {arrNum.map((item, ind) => (
          <NumberBtn
            isSelected={item == selectedNumber}
            key={ind}
            onClick={() => handleSelectedNumber(item)}
          >
            {item}
          </NumberBtn>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;

  @media (max-width: 500px) {
    margin-top: 10px;
    .error {
      order: 3;
    }
  }

  .btns {
    display: flex;
    gap: 24px;
    @media (max-width: 500px) {
      gap: 12px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    visibility: ${(props) =>
      props.children[0].props.isSelected ? "visible" : "hidden"};
    color: red;
  }
`;

const NumberBtn = styled.button`
  all: unset;
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 500px) {
    width: 55px;
    height: 55px;
    font-size: 20px;
  }
`;
