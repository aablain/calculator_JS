function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(num1, num2) {
    var output = num1 + num2;
    return output;
};

Calculator.prototype.sub = function(num1, num2) {
    var output = num1 - num2;
    return output;
};

Calculator.prototype.mul = function(num1, num2) {
    var output = num1 * num2;
    return output;
};

Calculator.prototype.div = function(num1, num2) {
    var output = num1 / num2;
    return output;
};


exports.calculatorModule = Calculator;
