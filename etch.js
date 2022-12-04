const sizeSlider = document.querySelector(".slider");
const sizeDisplay = document.querySelector("#size-display");

sizeSlider.onmousemove = () => updateText();
sizeSlider.onclick = () => updateText();

sizeSlider.addEventListener("change", () => {
  createCanvas();
  setGrid(sizeSlider.value);
})

// Removes the current canvas and creates a new one
function createCanvas() {
  const etchBorder = document.querySelector(".etch-border");
  etchBorder.removeChild(document.querySelector(".canvas"));

  const newCanvas = document.createElement("div");
  newCanvas.setAttribute("class", "canvas");

  const options = document.querySelector(".options");

  newCanvas.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
  newCanvas.style.gridTemplateRows = `repeat(${sizeSlider.value}, 1fr)`;
  etchBorder.insertBefore(newCanvas, options);
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
    e.target.style.backgroundColor = "#bab8ba";
  }
}

// Updates grid size text
function updateText() {
  sizeDisplay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
}

// Creates the initial 16 x 16 grid
window.onload = () => {
  setGrid(16);
}