for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  document.querySelector(".canvas").appendChild(newDiv);
}

addHover();

function addHover() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", function(e) {
      e.target.style.backgroundColor = "#bab8ba";
    });
  });
}


const gridButton = document.querySelector("button");

gridButton.addEventListener("click", () => {
  const etchBorder = document.querySelector(".etchBorder");
  etchBorder.removeChild(document.querySelector(".canvas"));

  const newGrid = document.createElement("div");
  newGrid.setAttribute("class", "canvas");
  
  let gridSize = 0;

  do {
    gridSize = parseInt(prompt("Please enter a new value between 1 and 100"));
  } while (gridSize > 100 || gridSize < 1 || !(gridSize));

  newGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  newGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  etchBorder.appendChild(newGrid);

  setGrid(gridSize);
})

function setGrid(size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    document.querySelector(".canvas").appendChild(newDiv);
  };
  addHover();
}