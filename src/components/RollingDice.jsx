import React, { useState } from "react";
import styled from "styled-components";

const RollingDice = ({ number, rolDice }) => {

   
  return (
    <DiceContainer>
      <div>
        <img
          src={`/images/dices/dice_${number}.png`}
          alt="dice_1.png"
          onClick={rolDice}
        />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollingDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }
`;
