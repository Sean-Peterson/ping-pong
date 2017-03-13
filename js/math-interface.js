//requirements
var Calculator = require('./../js/calculator.js').calculatorModule;

//jquery for math
$(document).ready(function() {
  $('#math').submit(function(event) {
    event.preventDefault();
    var n1 = parseInt($('#n1').val());
    console.log(n1);
    var n2 = parseInt($('#n2').val());
    var operand = $('#operand').val();
    var newCalculator = new Calculator ("blue");
    var output = newCalculator.math(n1,n2,operand);
    $('#math-result').append(output);
  });
});
