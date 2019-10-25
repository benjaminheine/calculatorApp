//create an array for the calculation which stores numbers and operators
let calculation = [];

//functions for pressing numbers which shows numbers in the display and puts it to the array
document.getElementById("seven").addEventListener("click", showNumberSeven);
function showNumberSeven(e) {
  e.preventDefault();
  let number = e.target.childNodes["0"].nodeValue;
  document.getElementById("digitField").value = number;
  calculation.push(number);
}

document.getElementById("four").addEventListener("click", showNumberFour);
function showNumberFour(e) {
  e.preventDefault();
  const number = e.target.childNodes[0].nodeValue;
  document.getElementById("digitField").value = number;
  calculation.push(number);
}

//function to put operators to the array
document.getElementById("adder").addEventListener("click", addNumbers);
function addNumbers(e) {
  calculation.push("+");
}

//function to calculate the numbers of the array
document.getElementById("resulter").addEventListener("click", showResult);
function showResult(e) {
  let result = eval(calculation[0] + calculation[1] + calculation[2]);
  document.getElementById("digitField").value = result;
}
