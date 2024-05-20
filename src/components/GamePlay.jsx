import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollingDice from "./RollingDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [number, setNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError]  = useState("");
  const [showRules, setShowRules] = useState(false);

  

  function rolDice() {
    if(selectedNumber === undefined){
      setError("You have not selected any number");
      return;
    }
    setError("");

    let randomNumber = Math.floor(Math.random() * 6 + 1);
    setNumber(randomNumber);

    if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber);
    }
    else{
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined);
}

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error = {error}
          setError = {setError}
        />
      </div>
      <div className="my_dice">
        <RollingDice
          number={number}
          rolDice={rolDice}
          
        />
      </div>
      <div className="btn">
        <OutlineButton onClick={() => setScore(0)}>Reset score</OutlineButton>
        <Button onClick={() => setShowRules(prev => !prev)}>Show Rules</Button>
        {showRules? <Rules /> : ''}
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
