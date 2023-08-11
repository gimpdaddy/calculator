//initial values
let operandA = null;
let operandB = null;
let operator = null;
let result = null;
operatorList = ["/", "*", "-", "+"];

function clear() {
    operandA = null;
    operandB = null;
    operator = null;
};

//create and style buttons
function createButtons(){
    for (i = 0; i < btnLabels.length; i++) { 
        const btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        // btn.setAttribute("data-key", `Key${btnLabels[i].toUpperCase()}`);
        document.querySelector(".buttonContainer").appendChild(btn);
        btn.innerHTML = btnLabels[`${i}`];
    }
}

const btnLabels =["C", "+/-", "%", "/",
                "7", "8", "9", "*",
                "4", "5", "6", "-",
                "1", "2", "3", "+",
                "0", "0", ".", "=",
                ];

createButtons();

//operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//operation
// const operate = (operator, a, b) => operator(a, b);

let displayText = "";

function selectClear() {
    clear();
    displayText = "";
}

function selectOperator(e) {
    operandA = parseInt(displayText);
    displayText = "";
    operator = e.target.textContent;
}

function selectEquals(e) {
    operandB = parseInt(displayText);
    if (operator === "/") result = divide(operandA, operandB);
    if (operator === "*") result = multiply(operandA, operandB);
    if (operator === "-") result = subtract(operandA, operandB);
    if (operator === "+") result = add(operandA, operandB);
    displayText = result;
}

//screen display
function updateDisplay(e) {

    displayText += e.target.textContent;

    if (e.target.textContent === "C") selectClear();

    if (operatorList.includes(e.target.textContent)) selectOperator(e);

    if (e.target.textContent === "=") selectEquals();

    const display = document.querySelector(".display");
    display.innerHTML = displayText;

}

const btns = document.querySelectorAll(".btn");
btns.forEach(el => el.addEventListener("click", updateDisplay));

// need to get operandA from first series of inputs

// need to get operandB after operator selected and before result requested

// need to 



//need to get sum from "+" etc

    // if (e.target.textContent === "/" | e.target.textContent === "*" | e.target.textContent === "-" | e.target.textContent === "+") {
    //     operandA = parseInt(displayText);
    //     displayText = "";
    // } else if (e.target.textContent === "=") {
    //     operandB = parseInt(displayText);
    // } else if (e.target.textContent === "C") {
    //     clear()
    // } else {
    //     displayText = displayText + e.target.textContent;
    // }

    // if (operator) {
    //     operandA = parseInt(displayText);
    //     displayText = "";
    // }
    
    // if (e.target.textContent === "=") operandB = parseInt(displayText);
    // if (operatorList.includes(e.target.textContent)) operator = e.target.textContent;

    // if (operator === "/" && e.target.textContent === "=") result = divide(operandA, operandB);
    // if (operator === "*" && e.target.textContent === "=") result = multiply(operandA, operandB);
    // if (operator === "-" && e.target.textContent === "=") result = subtract(operandA, operandB);
    // if (operator === "+" && e.target.textContent === "=") result = add(operandA, operandB);