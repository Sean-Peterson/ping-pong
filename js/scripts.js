$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val()
    var outPut = endFunction(userInput);
    $("#results").append(numberChecker);
  });

  var endFunction = function(n) {
    var number = "";
    for(var i = 1; i <= n; i += 1) {
      number = number += i + " ";
    };
    number = number.split(' ')
    var threes = numberChecker(number);
  };

  var numberChecker = function(nArray) {
    var number = nArray;
    var ping = "ping";
    var pong = "pong";
    var pingpong= "pingpong"
    alert(number)
    for(var i = 1; i < number.length; i += 1){
      if (number[i] % 3 === 0 && number[i] % 5 === 0) {
        number.splice(number[i]-1,1,pingpong);
        alert(number);
      } else if (number[i] % 3 === 0) {
        number.splice(number[i]-1,1,ping);
        alert(number);
      }
      else if(number[i] % 5 === 0) {
        number.splice(number[i]-1,1,pong);
        alert(number);
      };
    }
  };
});

//This is as far close as I could get. I have been working since since 8 am with about 30 mins of breaks total. I'm pretty discouraged. I feel like I'm close but don't quite understood. The week of learning from home made me fall behind. I didn't get the material and couldn't learn it on my own, apparently. :(
