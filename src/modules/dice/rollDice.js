"use strict";
import parseDiceExpression from "./parseDiceExpression";

function rollDice(numOfDice, numOfSides, bonus) {
  const parsedExpression = parseDiceExpression(diceExpression);
  let rolls = [];
  let rollTotal = 0;

  for (let i = 0; i < numOfDice; i++) {
    const roll = Math.floor(Math.random() * numOfSides);
    rolls.push(roll);
    rollTotal += roll;
  }

  return {
    total: rollTotal + bonus,
    rolls: [rolls], // nested to allow for multiple rolls via rerollDice.js
    bonus,
  };
}

export default rollDice;
