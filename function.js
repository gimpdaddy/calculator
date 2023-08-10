//create and style buttons
function createButtons(){
    for (i = 0; i < btnLabels.length; i++) { 
        const btn = document.createElement("button");
        document.querySelector(".buttonContainer").appendChild(btn);
        btn.setAttribute("class", "btn");
        btn.setAttribute("data-key", `Key${btnLabels[i].toUpperCase()}`);
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