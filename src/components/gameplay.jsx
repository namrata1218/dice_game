import React, { useState } from "react";
import styled from "styled-components";
import NumberSelector from "../NumberSelector";
import TotalScore from "../TotalScore";
import RollDice from "../Rolldice";
import { Button, OutlineButton } from "../buttonsfold.js/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState("");
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const[showRules,setShowRules]=useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number.");
            return;
        }
        setError("");

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(""); // Reset selectedNumber
    };
    const  resetScore=()=>{
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore score={score} />
                <NumberSelector
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber} // Pass setSelectedNumber as a prop
                    error={error}
                    setError={setError}
                />
            </div>
            <RollDice currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button
                onClick={()=>setShowRules((prev)=>!prev)}>{
                    showRules ? "Hide":"Show"} Rules
                    </Button>
            </div>
        {showRules &&<Rules/>}
        </MainContainer>
    );
};

const MainContainer = styled.main`
    padding-top: 70px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:40px;
       

    }
`;

export default GamePlay;
