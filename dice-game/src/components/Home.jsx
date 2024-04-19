import React from "react";
import styled from "styled-components";

function Home({toggleGamePlay}) {
  return (
    <Container>
      <div>
        <img src="/Image/Dices/dices 1.png" alt="Dice Image" />
      </div>
      <div className="right">
        <h1>Dice game</h1>
        <button onClick={toggleGamePlay}>Play Now</button>
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: end;

    h1 {
      font-size: 96px;
      font-weight: 700;
      text-transform: uppercase;
      white-space: nowrap;

      @media (max-width: 800px) {
        font-size: 17vw;
      }
    }

    button {
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
    }
  }

  @media (max-width: 800px) {
    height: 100%;
  }
`;
