$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val()
    var outPut = endFunction(userInput);
    $("#results").append(outPut);
  });

  var endFunction = function(n) {
    var number = "";
    for(var i = 1; i <= n; i += 1) {
      number = number += i + " ";
    };
    return number;
  };




});
