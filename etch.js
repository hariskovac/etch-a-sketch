const sizeSlider = document.querySelector(".slider");
const sizeDisplay = document.querySelector("#size-display");

sizeSlider.onmousemove = () => updateText();
sizeSlider.onclick = () => updateText();

sizeSlider.addEventListener("change", () => {
  createCanvas();
  setGrid(sizeSlider.value);
})

// Changes the color of the divs inside the canvas
function changeColor(e) {
  if (e?.buttons === 1) {
    e.target.style.backgroundColor = "#bab8ba";
  }
}

// Removes the current canvas and creates a new one
function createCanvas() {
  const etchBorder = document.querySelector(".etch-border");
  etchBorder.removeChild(document.querySelector(".canvas"));

  const newGrid = document.createElement("div");
  newGrid.setAttribute("class", "canvas");

  const options = document.querySelector(".options");

  newGrid.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
  newGrid.style.gridTemplateRows = `repeat(${sizeSlider.value}, 1fr)`;
  etchBorder.insertBefore(newGrid, options);
}

// Updates grid size text
function updateText() {
  sizeDisplay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
}

// Creates divs to fill the canvas based on user selected size
function setGrid(size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.addEventListener("mouseover", changeColor);
    newDiv.addEventListener("mousedown", changeColor);
    document.querySelector(".canvas").appendChild(newDiv);
  };
}

// Creates the initial 16 x 16 grid
window.onload = () => {
  setGrid(16);
}



// gridButton.addEventListener("click", () => {
//   const etchBorder = document.querySelector(".etchBorder");
//   etchBorder.removeChild(document.querySelector(".canvas"));

//   const newGrid = document.createElement("div");
//   newGrid.setAttribute("class", "canvas");

//   const options = document.querySelector(".options");
  
//   let gridSize = 0;

//   do {
//     gridSize = parseInt(prompt("Please enter a new value between 1 and 100"));
//   } while (gridSize > 100 || gridSize < 1 || !(gridSize));

//   newGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//   newGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
//   etchBorder.insertBefore(newGrid, options);

//   setGrid(gridSize);
// })