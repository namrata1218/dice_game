import React from "react";
import NumberSelector from "./NumberSelector";

const TotalScore=({score})=>{
    return(
        <div className="main_total">
            <h2>{score}</h2>
            <p>Total Score</p>
            
        </div>
    );
};
export default TotalScore;