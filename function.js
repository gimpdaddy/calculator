//initial values
let bString = "";
let a = undefined;
let b = undefined;
let operator = null;

// Operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
function divide(a, b) {
    if (b === 0) {
        return "error /0";
    } else {
        return (a / b).toFixed(2);
    }
}

function operate(a, b, operator){
    if (operator === "add") return add(a, b);
    if (operator === "subtract") return subtract(a, b);
    if (operator === "divide") return divide(a, b);
    if (operator === "multiply") return multiply(a, b);
}

function clear() {
    updateDisplay("clear"); 
    bString = "";
    a = undefined;
    b = undefined;
    operator = null;
    console.log("clear")
}

function neg1() {
    if (bString === 0 | bString === "") {
        bString = "-";
    } else {
        bString = `${bString * -1}`;
    }
    updateDisplay(bString);
}

function percentage() {
    bString = bString / 100;
    updateDisplay(bString);
}

function displayResult(e){
    chainResult(e);
    bString = b;
    b = undefined;
    operator = null;
}

// Working functions
const displayText = document.querySelector(".display");
const updateDisplay = (text) => displayText.textContent = text;

function displayBstring(e) {
    if (bString.length < 14) bString += e.target.textContent;
    updateDisplay(bString);
    console.log(a, b, operator);
}

function shiftVars() {
    a = b;
    b = Number(bString);
    bString = "";
}

function chainResult(e){
    if (!operator) operator = e.target.id;
    shiftVars();
    if(typeof a !== "undefined" && typeof b !== "undefined" && operator) {
        b = operate(a, b, operator);
        updateDisplay(b);
        operator = e.target.id;
    }
}

//event listeners
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", clear);

const btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click", chainResult);

const btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click", chainResult);

const btnSubtract = document.getElementById("subtract");
btnSubtract.addEventListener("click", chainResult);

const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", chainResult);

const btnEqual = document.getElementById("equal");
btnEqual.addEventListener("click", displayResult);

const btnNumbers = document.querySelectorAll(".nums");
btnNumbers.forEach(el => el.addEventListener("click", displayBstring));

const btnNeg1 = document.getElementById("neg1");
btnNeg1.addEventListener("click", neg1);

const btnPercentage = document.getElementById("percentage");
btnPercentage.addEventListener("click", percentage);