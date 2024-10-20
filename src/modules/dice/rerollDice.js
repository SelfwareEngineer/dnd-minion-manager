"use strict";
import rollDice from "./rollDice";

function rerollDice(numOfDice, numOfSides, bonus, rerollType) {
  if (!["higher", "lower"].includes(rerollType)) {
    throw new Error('rerollType must be either "higher" or "lower."');
  }

  const roll1 = rollDice(numOfDice, numOfSides, bonus);
  const roll2 = rollDice(numOfDice, numOfSides, bonus);

  let total;
  if (rerollType === "higher") {
    total = Math.max(roll1.total, roll2.total);
  } else {
    total = Math.min(roll1.total, roll2.total);
  }

  return {
    total,
    rolls: [roll1, roll2],
    bonus,
  };
}

export default rerollDice;
