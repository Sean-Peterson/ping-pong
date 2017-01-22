$(document).ready(function() {
  $("#list").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    $("#list").show();
    var number = $("#userInput").val();
    var nArray = array(number);
    nArray.forEach(function(n) {
      if (n % 3 === 0 && n % 5 === 0){
        n = "ping-pong";
        $("#ping-pong").append("<li>"+n+"</li>");
      } else if (n % 5 === 0) {
          n = "pong";
          $("#pong").append("<li>"+n+"</li>");
      } else if (n % 3 === 0) {
          n = "ping";
          $("#ping").append("<li>"+n+"</li>");
      } else {
          $("#regular").append("<li>"+n+"</li>" + " ");
      }
    });
  });


  var array = function(n) {
    var ar = [];
    for(var i = 1; i <= n; i += 1) {
      ar = ar.concat([i]);
    };
    return ar;
  };
});
