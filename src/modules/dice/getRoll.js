"use strict";
import parseDiceExpression from "./parseDiceExpression.js";
import rollDice from "./rollDice.js";
import rerollDice from "./rerollDice.js";

function getRoll(diceExpression, isCrit = false, rerollType = null) {
  if (isCrit && rerollType) {
    throw new Error("Roll cannot be both a crit and a reroll");
  }

  const parsedExpression = parseDiceExpression(diceExpression);

  // for conciseness
  let numberOfDice = parsedExpression.numberOfDice;
  const numberOfSides = parsedExpression.numberOfSides;
  const bonus = parsedExpression.bonus;

  if (isCrit) {
    numberOfDice *= 2;
  }

  let roll;

  if (rerollType) {
    roll = rerollDice(numberOfDice, numberOfSides, bonus, rerollType);
  } else {
    roll = rollDice(numberOfDice, numberOfSides, bonus);
  }

  return roll;
}

export default getRoll;
