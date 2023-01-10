DEFAULT_CANVAS_SIZE = 16;
BG_CLR = "white";
BLACK_CLR = "black";
RANDOM_CLR = "random";

const canvas = document.querySelector(".canvas-container");
const blackBtn = document.getElementById("black-btn");
const randomBtn = document.getElementById("random-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const createCanvasBtn = document.getElementById("create-canvas-btn");

let selectedColorOption = BLACK_CLR;
let isPainting = false;


function setCanvasOptionsHandler() {
    let userInput = document.querySelector("input");
    let hintText = document.getElementById("create-canvas-hint");

    if (userInput.value < 2 || userInput.value > 100) {
        hintText.textContent = "Canvas size should be between 2 and 100";
        userInput.value = "";
    } else if (isNaN(userInput.value) || userInput.value === "") {
        hintText.textContent = "Please type in a number";
        userInput.value = "";
    } else {
        createCanvas(userInput.value);
        hintText.textContent = "";
    }
}


function colorSquareHandler() {
    if (isPainting) {
        if (selectedColorOption === RANDOM_CLR) {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = selectedColorOption;
        }
    }
}

function clearCanvasHandler() {
    const squares = canvas.querySelectorAll("div");
    squares.forEach((square) => square.style.backgroundColor = BG_CLR);
}

function setColorOptionHandler(option) {
    selectedColorOption = option;
}

function createCanvas(size = DEFAULT_CANVAS_SIZE) {
    const gridSize = size * size;

    // Reset existing canvas to default
    selectedColorOption = BLACK_CLR;
    clearCanvasHandler();
    
    
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i=0; i < gridSize; i++) {
        let square = document.createElement("div");
        
        canvas.insertAdjacentElement("beforeend", square);
        square.style.backgroundColor = BG_CLR;
        square.addEventListener("mouseover", colorSquareHandler);
    }
}

// Toggle painting upon clicking the canvas only
canvas.addEventListener("click", () => isPainting = !isPainting);

// Controls handlers
blackBtn.addEventListener("click", setColorOptionHandler.bind(this, option=BLACK_CLR));
randomBtn.addEventListener("click", setColorOptionHandler.bind(this, option=RANDOM_CLR));
eraserBtn.addEventListener("click", setColorOptionHandler.bind(this, option=BG_CLR));
clearBtn.addEventListener("click", clearCanvasHandler);
createCanvasBtn.addEventListener("click", setCanvasOptionsHandler);

createCanvas();