let calculation = [];

//Create event listener for buttons when page is loaded
window.onload = function() {
  createEventListenerForButtons();
  createEventListenerForOperators();
};

//get all buttons and operators
const buttons = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operators");

//create event listener for clicked button and push digit to an array and put digit to the display
function createEventListenerForButtons() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
      e.preventDefault();
      const number = e.target.childNodes[0].nodeValue;
      document.getElementById("digitField").value =
        document.getElementById("digitField").value + number;
      calculation.push(number);
    });
  }
}

//create event listener for clicked operator, push operator to array and empty display
function createEventListenerForOperators() {
  for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(e) {
      e.preventDefault();
      const operator = e.target.childNodes[0].nodeValue;
      calculation.push(operator);
      document.getElementById("digitField").value = "";
    });
  }
}

// function to calculate the numbers of the array
document.getElementById("resulter").addEventListener("click", showResult);
function showResult(e) {
  e.preventDefault();
  console.log(calculation);
  let result = 0;
  result = eval(calculation.join(""));
  document.getElementById("digitField").value = result;
}

// function to delete display and array
document.getElementById("resetButton").addEventListener("click", deleteDisplay);
function deleteDisplay(e) {
  calculation = [];
  document.getElementById("digitField").value = "";
}
