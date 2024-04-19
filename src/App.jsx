import React, { useState } from "react";
import StartGame from "./components/startgame";
import GamePlay from "./components/gameplay";

const App =()=>{
    const[gameStarted,setGameStarted]=useState(false);
    const toggleGamePlay=()=>{
        setGameStarted((prev)=>!prev);
    };
return(
    <>
    { gameStarted? <GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
   </>);
};
export default App;