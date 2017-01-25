//Back End
var numberCounter = function(n) {
  var numberArray = [];
  for(var i = 1; i <= n; i += 1) {
    numberArray.push([i]);
  };
  return numberArray;
};

var numberConverter = function(n) {
  var convert = numberCounter(n);
  var lastArray = [];
  convert.forEach(function(n){
    if (n % 3 === 0 && n % 5 === 0){
      n = "ping-pong"
      lastArray.push(n)
    } else if (n % 5 === 0) {
        n = "pong";
        lastArray.push(n)
    } else if (n % 3 === 0) {
        n = "ping";
        lastArray.push(n)
    } else {
        lastArray.push(n)
    }
  });
  return lastArray;
};

var list = function(n) {
  var listInput = numberConverter(n);
  var listOutput = [];
  listInput.forEach(function(n) {
    listOutput.push("<li>" + n + "</li>")
  });
  return listOutput;
};

//Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#list").show();
    $("#explanation").show();
    var number = $("#userInput").val();
    var display = list(number);
    $('.output').empty().append(display);
  });
});
