$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#userInput").val();
    var nArray = array(number);
    nArray.forEach(function(n) {
      if (n % 3 === 0 && n % 5 === 0){
        n = "ping-pong";
        $("#results").append("<li>"+n+"</li>");
      } else if (n % 5 === 0) {
          n = "pong";
          $("#results").append("<li>"+n+"</li>");
      } else if (n % 3 === 0) {
          n = "ping";
          $("#results").append("<li>"+n+"</li>");
      } else {
          $("#results").append("<li>"+n+"</li>");
      }
    });

    // var change = changer(nArray);
  });

  var array = function(n) {
    var ar = [];
    for(var i = 1; i <= n; i += 1) {
      ar = ar.concat([i]);
    };
    return ar;
  };

  // var changer = function(n) {
  //   for(var i = 1; i <= n; i += 1)  {
  //     if (n[i] % 3 ==== 0 && n[i] % 5 ==== 0)
  //     n[i].slice(n[i],1,"ping-pong")
  //   }
  // }

});
