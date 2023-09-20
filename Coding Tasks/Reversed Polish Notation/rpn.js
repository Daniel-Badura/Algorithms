function calculateRPN(rpnExpression) {
  const stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const tokens = rpnExpression.split(" ");

  for (const token of tokens) {
    if (!isNaN(token)) {
      // If the token is a number, push it onto the stack
      stack.push(parseFloat(token));
    } else if (token in operators) {
      // If the token is an operator, pop the top two values from the stack,
      // apply the operator, and push the result back onto the stack
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = operators[token](operand1, operand2);
      stack.push(result);
    } else {
      throw new Error("Invalid token: " + token);
    }
  }

  // At the end, the result should be the only item on the stack
  if (stack.length === 1) {
    return stack[0];
  } else {
    throw new Error("Invalid expression");
  }
}

// Example :
const rpnExpression = "3 4 + 2 * 7 /";
const result = calculateRPN(rpnExpression);
console.log(result); // Output: 3
