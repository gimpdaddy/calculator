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

//user inputs
let operandA = null;
let operandB = null;
let operator = null;

//operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//operation
const operate = (operator, a, b) => operator(a, b);

//screen display
function displayOutput(e) {
    const display = document.querySelector(".display");
    display.innerHTML = e.target.textContent;
}

const btns = document.querySelectorAll(".btn");
btns.forEach(el => el.addEventListener("click", displayOutput));