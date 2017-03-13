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
