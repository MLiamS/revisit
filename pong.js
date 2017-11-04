function getNumber() {
  var input = parseInt(prompt ("enter a number greater than zero"));
  $("#ping-pong").show();
  return (input);

};

$(document).ready(function () {

var numbers1 = [];
var numbers2 = [];


  $("h1").click(function(){

    var userInt = getNumber();
    alert( "var is " + userInt );
    for (var i = 1; i <= userInt ; i++) { numbers1.push(i)
    }
    numbers1.forEach(function(i) {  $("#numbers").append("<li>" + i + "</li>")
      });
    });

    $("ping-pong").click(function(){
        // clear list,
        // do math,
        // populate new list,

    });




});
