import React from "react";
// import diceImage from "../images/dice-eyes-luck-game-705171.webp"; // Import the image
import { Button } from "../buttonsfold.js/Button";
const StartGame = ({toggle}) => {
  return (
    
      <div className="main_div">
        {/* <img src={diceImage} alt="dice image" /> */}
        <div className="main-content">
        <h1>Start Game</h1>
        <Button onClick={toggle} >Play Now</Button>
        </div>
      </div>
   
  );
};

export default StartGame;