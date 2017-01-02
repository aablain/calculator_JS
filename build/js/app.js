(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/pingpong.js').calculatorModule;


$(document).ready(function() {



  $('#add-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#sub-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.sub(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#mul-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.mul(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#div-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.div(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });





});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/pingpong.js":1}]},{},[2]);
