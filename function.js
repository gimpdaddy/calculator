//initial values
let bString = "";
let a = undefined;
let b = undefined;
let operator = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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

function storeVars(e) {

    a = b;
    b = parseInt(bString);
    bString = "";
    if (e) operator = e.target.id;

    console.log(a, b, operator);
}

function chainResult(e){

    storeVars(e);

    if(a && b && operator) {
    
        b = operate(a, b, operator);

        displayText.textContent = b;

        console.log(a, b, operator);
    }

}

function displayResult(){

    storeVars();

    if(a && b && operator) {
    
        bString = operate(a, b, operator);

        displayText.textContent = bString;

        b = undefined;
        
        console.log(a, b, operator);
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
btnEqual.addEventListener("click", displayResult)

const btnNumbers = document.querySelectorAll(".nums");
btnNumbers.forEach(el => el.addEventListener("click", displayBstring));

const displayText = document.querySelector(".display");

//to add in:

//decimal places
//handle divide 0
//handle = = or + + etc