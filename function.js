//initial values
let bString = "";
let a = undefined;
let b = undefined;
let operator = null;
let result = undefined;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, operator){
    if (operator === "add") result = add(a, b);
    if (operator === "subtract") result = subtract(a, b);
    if (operator === "divide") result = divide(a, b);
    if (operator === "multiply") result = multiply(a, b);
}

function clear() {
    displayText.textContent = ""; 
    bString = "";
    a = undefined;
    b = undefined;
    operator = null;
    result = undefined;
    console.log("clear")
}

function displayBstring(e) {
    bString += e.target.textContent;
    displayText.textContent = bString;
    console.log(a, b, operator, result);
}

function storeVars(e) {

    a = b;
    b = parseInt(bString);
    bString = "";
    if (e) operator = e.target.id;

    console.log(a, b, operator, result);
}

function displayResult(){

    storeVars();

    operate(a, b, operator);

    displayText.textContent = result;

    bString = result;
    // a = undefined;

    console.log(a, b, operator, result);

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


