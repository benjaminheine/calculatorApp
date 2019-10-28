let calculation = [];
resultInDisplay = "";
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
      console.log(resultInDisplay);
      // if (resultInDisplay == 1) {
      //   document.getElementById("digitField").value = "";
      //   calculation = [];
      //   resultInDisplay = 0;
        
      // }
      const number = e.target.childNodes[0].nodeValue;
      document.getElementById("digitField").value =
        document.getElementById("digitField").value + number;
      calculation.push(number);
      document.getElementById("resetButton").innerText = "C";
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
      document.getElementById("digitField").value =
        document.getElementById("digitField").value + operator;
    });
  }
}

// function to calculate the numbers of the array
document.getElementById("resulter").addEventListener("click", showResult);
function showResult(e) {
  e.preventDefault();
  console.log(calculation);
  let result = 0;
  let lastArrayItem = calculation[calculation.length - 1];
  console.log(calculation.join(""));
  result = eval(calculation.join(""));
  calculation = [];
  calculation.push(result);
  document.getElementById("digitField").value = result.toLocaleString("en", {
    maximumFractionDigits: 3,
    useGrouping: false
  });
  document.getElementById("resetButton").innerText = "CE";
  //resultInDisplay = 1;
}

// function to delete display and array
document.getElementById("resetButton").addEventListener("click", deleteDisplay);
function deleteDisplay(e) {
  console.log(resultInDisplay);
  if (e.target.childNodes["0"].data === "CE") {
    calculation = [];
    document.getElementById("digitField").value = "";
  } else {
    // if (resultInDisplay == 2) {
    //   calculation = [];
    //   document.getElementById("digitField").value = "";
    //   resultInDisplay = 0;
    // }else{
    calculation.splice(calculation.length - 2, 2);
    document.getElementById("digitField").value = calculation.join("");
    document.getElementById("resetButton").innerText = "CE";
    //}
  }
}
