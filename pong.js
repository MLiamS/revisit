function getNumber() {
  var input = parseInt(prompt ("enter a number greater than zero"));
  return (input);

};

$(document).ready(function () {



  $("h1").click(function(){ var userInt = getNumber();
    alert( "var is " + userInt );
  });

  $("#numbers").click(function(){ alert( "this is the list");

  });

});
