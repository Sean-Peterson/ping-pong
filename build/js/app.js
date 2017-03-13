(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
//requirements
var Calculator = require('./../js/calculator.js').calculatorModule;

//jquery for math
$(document).ready(function() {
  $('#math').submit(function(event) {
    event.preventDefault();
    var n1 = parseInt($('#n1').val());
    var n2 = parseInt($('#n2').val());
    var operand = $('#operand').val();
    var newCalculator = new Calculator ("blue");
    var output = newCalculator.math(n1,n2,operand);
    $('#math-result').empty();
    $('#math-result').append(output);
  });
});

//requirements
// var Calculator = require('./../js/calculator.js').calculatorModule;

//jquery for pingpong
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
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

$(function() {
  $('#time').text(moment());
});

},{"./../js/calculator.js":1}]},{},[2]);
