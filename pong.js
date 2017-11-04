function getNumber() {
  var input = parseInt(prompt ("enter a number greater than zero"));
  $("#ping-pong").show();
  $(".ping-pong").show();
  return (input);
};

$(document).ready(function () {

var numbers1 = [];
var b = "<button id=restart type=button name=button>RESTART!</button>";

  $("#start").click(function(){

    var userInt = getNumber();
    for (var i = 1; i <= userInt ; i++) { numbers1.push(i)
    }
    numbers1.forEach(function(i) {  $("#numbers").append("<li>" + i + "</li>")
      });
    });

    $("#ping-pong").click(function(){
      $("#numbers").empty();
          numbers1.forEach(function(i){
            if ((i % 15) === 0) numbers1.splice(i-1, 1, "ping-pong");
            else if ((i % 5) === 0) numbers1.splice(i-1, 1, "pong");
            else if ((i % 3) === 0) numbers1.splice(i-1, 1, "ping");
          });

            numbers1.forEach(function(i) {  $("#numbers").append("<li>" + i + "</li>")
        });
        $("#numbers").append(b);
        $("#restart").click(function(){
          location.reload();
        });
      });
    });
