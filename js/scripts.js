$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var results = $("#results").append("<li>" + userInput + "</li>");
  });


});
