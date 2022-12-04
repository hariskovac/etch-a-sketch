const sizeSlider = document.querySelector(".slider");
const sizeDisplay = document.querySelector("#slider-value");
const clearButton = document.querySelector("#clear-button");
const colorPicker = document.querySelector(".color-picker");
const prismaticButton = document.querySelector("#prismatic-button");
const paintButton = document.querySelector("#paint-button");
const eraserButton = document.querySelector("#eraser-button");

let color = colorPicker.value;
let prismaticToggle = false;
let eraserToggle = false;

sizeSlider.addEventListener("change", () => {
  createCanvas();
  setGrid(sizeSlider.value);
})

prismaticButton.addEventListener("click", prismaticMode);
paintButton.addEventListener("click", paintAll);
eraserButton.addEventListener("click", eraserMode);
clearButton.addEventListener("click", clearCanvas);
sizeSlider.addEventListener("mousemove", updateText);
sizeSlider.addEventListener("click", updateText);

colorPicker.addEventListener("change", () => {
  prismaticOff();
  eraserOff();
  color = colorPicker.value;
})

// Removes the current canvas and creates a new one
function createCanvas() {
  const mainSection = document.querySelector(".main-section");
  mainSection.removeChild(document.querySelector(".canvas"));

  const newCanvas = document.createElement("div");
  newCanvas.setAttribute("class", "canvas");

  const options = document.querySelector(".options");

  newCanvas.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
  newCanvas.style.gridTemplateRows = `repeat(${sizeSlider.value}, 1fr)`;
  mainSection.insertBefore(newCanvas, options);
}

// Creates divs to fill the canvas based on user selected size
function setGrid(size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const canvasElement = document.createElement("div");
    canvasElement.classList.add("square");
    canvasElement.addEventListener("mouseover", changeColor);
    canvasElement.addEventListener("mousedown", changeColor);
    document.querySelector(".canvas").appendChild(canvasElement);
  };
}

// Changes the color of the divs inside the canvas
function changeColor(e) {
  if (e?.buttons === 1) {
    if (prismaticToggle === true) {
      const rainbowColor = Math.floor(Math.random() * 360);
      e.target.style.backgroundColor = `hsl(${rainbowColor}, 100%, 60%)`;
    } else {
      e.target.style.backgroundColor = `${color}`;
    }
  }
}

// Toggles prismatic mode on and eraser mode off
function prismaticMode(e) {
  eraserOff();
  if (prismaticToggle) {
    prismaticOff();
  } else {
    prismaticToggle = true;
    e.target.style.backgroundColor = "#fbd782";
  }
}

// Toggles prismatic mode off
function prismaticOff() {
  prismaticToggle = false;
  prismaticButton.style.backgroundColor = "#f2f2f2";
}

// Paints the canvas with the user selected color
function paintAll() {
  const canvasElements = document.querySelectorAll(".square");
  canvasElements.forEach((square) => {
    square.style.backgroundColor = `${color}`;
  });
}

// Toggles eraser mode off
function eraserOff() {
  eraserToggle = false;
  eraserButton.style.backgroundColor = "#f2f2f2";
}

// Toggles eraser mode on and prismatic mode off
function eraserMode(e) {
  prismaticOff();
  colorPicker.value = "#f2f2f2";
  color = colorPicker.value;
  if (eraserToggle) {
    eraserOff();
  } else {
    eraserToggle = true;
    e.target.style.backgroundColor = "#fbd782";
  }
}

// Clears the canvas
function clearCanvas() {
  const canvasElements = document.querySelectorAll(".square");
  canvasElements.forEach((square) => {
    square.style.backgroundColor = "#f2f2f2";
  });
}

// Updates grid size text
function updateText() {
  sizeDisplay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
}

// Creates the initial 16 x 16 grid
window.onload = () => {
  setGrid(16);
}