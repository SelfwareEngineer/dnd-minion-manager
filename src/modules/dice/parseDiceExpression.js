"use strict";
function parseDiceExpression(expressionStr) {
  const regex = /^(\d*)d(\d+)([+-]\d+)?$/;
  const match = expressionStr.match(regex);

  if (!match) {
    throw new Error("Invalid dice expression");
  }

  const [_, numberOfDice, numberOfSides, bonus] = match;

  return {
    numberOfDice: numberOfDice ? Number(numberOfDice) : 1,
    numberOfSides: Number(numberOfSides),
    bonus: bonus ? Number(bonus) : 0,
  };
}

export default parseDiceExpression;
