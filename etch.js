const sizeSlider = document.querySelector(".slider");
const sizeDisplay = document.querySelector("#size-display");

changeColor();

// Changes the color of the divs inside the canvas
function changeColor(e) {
  if (e?.buttons > 0) {
    e.target.style.backgroundColor = "#bab8ba";
  }
}


// Updates the canvas upon changing the size slider
sizeSlider.addEventListener("change", () => {
  const etchBorder = document.querySelector(".etch-border");
  etchBorder.removeChild(document.querySelector(".canvas"));

  const newGrid = document.createElement("div");
  newGrid.setAttribute("class", "canvas");

  const options = document.querySelector(".options");

  newGrid.style.gridTemplateColumns = `repeat(${sizeSlider.value}, 1fr)`;
  newGrid.style.gridTemplateRows = `repeat(${sizeSlider.value}, 1fr)`;
  etchBorder.insertBefore(newGrid, options);

  setGrid(sizeSlider.value);
})


// Update grid size text while moving slider
sizeSlider.onmousemove = function () {
  sizeDisplay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
}  

// Update grid size text after clicking on the slider
sizeSlider.onclick = function () {
  sizeDisplay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
}

// const gridButton = document.querySelector("button");

// Creates divs to fill the canvas based on user selected size
function setGrid(size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.addEventListener("mouseover", changeColor);
    newDiv.addEventListener("mousedown", changeColor);
    document.querySelector(".canvas").appendChild(newDiv);
  };
  changeColor();
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