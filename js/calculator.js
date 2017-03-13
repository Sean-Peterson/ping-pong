function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.math = function(n1,n2,operand) {
  var result;
  if (operand == 1) {
    result = n1 + n2;
  } else if(operand == 2) {
    result = n1 - n2;
  } else if(operand == 3) {
    result = n1 * n2;
  } else if(operand == 4) {
    result = n1 / n2;
  }
  return result;
};

exports.calculatorModule = Calculator;
