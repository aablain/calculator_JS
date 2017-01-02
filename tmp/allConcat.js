var Calculator = require('./../js/pingpong.js').calculatorModule;


$(document).ready(function() {



  $('#add-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#sub-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.sub(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#mul-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.mul(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#div-button').click(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.div(num1, num2);
    $('#solution').empty()
    $('#solution').append("<li>" + output + "</li>");
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
