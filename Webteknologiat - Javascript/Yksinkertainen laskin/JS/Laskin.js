function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function myFunction(){
    return getRandomInt(10);
}

function decreaseNumber(numberField) {
    var field = document.getElementById("numberField" + numberField);
    var currentValue = parseInt(field.value);
    if (currentValue > 0) {
      field.value = currentValue - 1;
      updateNumber(numberField, currentValue - 1);
    }
  }
  
  function increaseNumber(numberField) {
    var field = document.getElementById("numberField" + numberField);
    var currentValue = parseInt(field.value);
    field.value = currentValue + 1;
    updateNumber(numberField, currentValue + 1);
}
  
  function updateNumber(numberField, newValue) {
    // Tee jotain luvun arvolla, esim. tulosta se konsoliin
    console.log("Uusi arvo kentälle " + numberField + ": " + newValue);
  }

  function calculate() {
    // Haetaan arvot tekstikentistä ja pudotusvalikosta
    var number1 = parseInt(document.getElementById("numberField1").value);
    var operator = document.getElementById("operator").value;
    var number2 = parseInt(document.getElementById("numberField2").value);
  
    // Lasketaan lopputulos
    var result;
    switch(operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        result = "Virheellinen operaattori";
    }
  
    // Näytetään lopputulos käyttäjälle
    document.getElementById("result").innerHTML = result;
  }

  $(document).ready(function() {
    $("#calculate-button").on("click", function() {
      var num1 = parseInt($("#numberField1").val());
      var num2 = parseInt($("#numberField2").val());
      if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        $("<div></div>").html("Syötä kumpaankin kenttään kokonaisluku.").dialog();
        return false;
      }
    });
  });