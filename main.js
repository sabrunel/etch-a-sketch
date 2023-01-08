CANVAS_SIZE = 16;
BG_CLR = "white"
BLACK_CLR = "black"
RANDOM_CLR = "random"

const canvas = document.querySelector(".canvas-container");
const blackBtn = document.getElementById("black-btn");
const randomBtn = document.getElementById("random-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");

let selectedColorOption = BLACK_CLR;


function colorSquareHandler() {
    if (selectedColorOption === RANDOM_CLR) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = selectedColorOption;
    }
}

function clearCanvasHandler() {
    const squares = canvas.querySelectorAll("div");
    squares.forEach((square) => square.style.backgroundColor = BG_CLR);
}

function setColorOptionHandler(option) {
    selectedColorOption = option;
}

function createCanvas(size = 16) {
    const gridSize = size * size;
    
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i=0; i < gridSize; i++) {
        let square = document.createElement("div");
        
        canvas.insertAdjacentElement("beforeend", square);
        square.style.backgroundColor = BG_CLR;
        square.addEventListener("mouseover", colorSquareHandler);
    }
}


blackBtn.addEventListener("click", setColorOptionHandler.bind(this, option=BLACK_CLR));
randomBtn.addEventListener("click", setColorOptionHandler.bind(this, option=RANDOM_CLR));
eraserBtn.addEventListener("click", setColorOptionHandler.bind(this, option=BG_CLR));
clearBtn.addEventListener("click", clearCanvasHandler);


createCanvas(CANVAS_SIZE);