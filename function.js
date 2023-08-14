//initial values
let bString = "";
let a = 0;
let b = 0;
let operator = null;
let result = 0;

function clear() {
    displayText.textContent = ""; 
    bString = "";
    a = 0;
    b = 0;
    operator = null;
    result = 0;
    console.log("clear")
}

//event listeners
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", clear);

const btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click", storeVars);

const btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click", storeVars);

const btnSubtract = document.getElementById("subtract");
btnSubtract.addEventListener("click", storeVars);

const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", storeVars);

const btnEqual = document.getElementById("equal");
btnEqual.addEventListener("click", displayResult)

const btnNumbers = document.querySelectorAll(".nums");
btnNumbers.forEach(el => el.addEventListener("click", displayBstring));

const displayText = document.querySelector(".display");

function displayBstring(e) {
    bString += e.target.textContent;
    displayText.textContent = bString;
}

function storeVars(e) {

    a = b;
    b = parseInt(bString);
    bString = "";
    if (e) operator = e.target.id;

    console.log(a, b, operator);
}

function displayResult(){

    storeVars();

    if (operator === "add") result = add(a, b);
    if (operator === "subtract") result = subtract(a, b);
    if (operator === "divide") result = divide(a, b);
    if (operator === "multiply") result = multiply(a, b);

    displayText.textContent = result;

    // b = result;

    console.log(result);

}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b = 1) => a * b;
const divide = (a, b = 1) => a / b;




