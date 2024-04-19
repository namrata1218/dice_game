import styled from "styled-components";
import { useState } from "react";

// Helper function to dynamically import images
const importAll = (context) => {
  let images = {};
  context.keys().map((item, index) => {
    images[index + 1] = context(item);
  });
  return images;
};

// Dynamically import all dice images from the images directory
const diceImages = importAll(
  require.context("../src/images/", false, /\.(png|jpe?g|svg)$/)
);

const RollDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={diceImages[currentDice]} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 55px;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
  }

  p {
    justify-content: center;
  }
`;
