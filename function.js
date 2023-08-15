//initial values
let bString = "";
let a = undefined;
let b = undefined;
let operator = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

function neg1() {
    if (bString === 0 | bString === "") {
        bString = "-";
    } else {
        bString = `${bString * -1}`;
    }
    displayText.textContent = bString;
}

function percentage() {
    bString = bString / 100;
    displayText.textContent = bString;
}

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
    displayText.textContent = "clear"; 
    bString = "";
    a = undefined;
    b = undefined;
    operator = null;
    console.log("clear")
}

function displayBstring(e) {
    bString += e.target.textContent;
    displayText.textContent = bString;
    console.log(a, b, operator);
}

function shiftVars() {
    a = b;
    b = Number(bString);
    bString = "";
}

function chainResult(e){

    if (!operator) shiftVars();

    operator = e.target.id;

    if(typeof a !== "undefined" && typeof b !== "undefined" && operator) {
    
        b = operate(a, b, operator);

        displayText.textContent = b;

        operator = null;

        console.log(a, b, operator);
    }

}

function displayResult(){

    shiftVars();

    if(typeof a !== "undefined" && typeof b !== "undefined" && operator) {
    
        bString = operate(a, b, operator);

        console.log(bString);

        displayText.textContent = bString;

        b = undefined;

        operator = null;
        
        console.log(a, b, operator);
    } else {
        displayText.textContent = "error early="
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

const displayText = document.querySelector(".display");

//to add in:

//decimal places
//work with non integers