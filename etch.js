for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  document.querySelector(".container").appendChild(newDiv);
}

const squares = document.querySelectorAll(".hover");

squares.forEach((square) => {
  square.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "crimson";
  });
});

function setGrid(size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const newDiv = document.createElement("div");
    document.querySelector(".container").appendChild(newDiv);
  }
}