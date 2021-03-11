// Story

//An etch-a-sketch pad that paints random colors based on the user's mouse path

// Plan

// Insert a grid into a container using javascript
// Hover effects for when a user moves cursor through grid
// Ability to resize grid within fixed space

const container = document.querySelector(".container");
const resetButton = document.querySelector("#btn-reset");
const buttons = document.querySelectorAll("button");

let colorChoice = "Default";
let grayColors = {
  1: `rgb(220,220,220)`,
  2: `rgb(211,211,211)`,
  3: `rgb(192,192,192)`,
  4: `rgb(169,169,169)`,
  5: `rgb(128,128,128)`,
  6: `rgb(105,105,105)`,
  7: `rgb(119,136,153)`,
  8: `rgb(112,128,144)`,
  9: `rgb(47,79,79)`,
  10: `rgb(0,0,0)`,
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    colorChoice =
      button.id === "btn-gray-scale"
        ? "Gray Scale"
        : button.id === "btn-black"
        ? "Black"
        : button.id === "btn-erase"
        ? "Erase"
        : button.id === "btn-random"
        ? "Random"
        : "Default";
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", addSelectedClass);
});

function addSelectedClass(e) {
  buttons.forEach((button) => {
    button.classList.remove("button-selected");
  });
  if (e.target.id === "btn-gray-scale") {
    e.target.classList.add("button-selected");
  } else if (e.target.id === "btn-black") {
    e.target.classList.add("button-selected");
  } else if (e.target.id === "btn-erase") {
    e.target.classList.add("button-selected");
  } else if (e.target.id === "btn-erase") {
    e.target.classList.add("button-selected");
  } else if (e.target.id === "btn-random") {
    e.target.classList.add("button-selected");
  } else {
    e.target.classList.remove("button-selected");
  }
}

window.addEventListener("load", defaultGrid);
resetButton.addEventListener("click", resetGrid);

function defaultGrid() {
  createGrid(16);
  fillGrid(16);
}

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    container.appendChild(gridCell);
    gridCell.addEventListener("mouseover", changeColor);
  }
}

function changeColor(e) {
  if (colorChoice === "Default" || colorChoice === "Random") {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
  } else if (colorChoice === "Gray Scale") {
    let x = Math.floor(Math.random() * 10);
    e.target.style.backgroundColor = grayColors[x];
  } else if (colorChoice === "Black") {
    e.target.style.backgroundColor = `rgb(0,0,0)`;
  } else if ((colorChoice = "Erase")) {
    e.target.style.backgroundColor = `rgb(255,255,255`;
  }
}

function resetGrid() {
  let size = prompt("Pick a number between 1 and 64");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  size = parseInt(size);
  if (size < 1 || size > 64 || Number.isNaN(size)) {
    size = prompt("Enter a NUMBER between 1 and 64");
    createGrid(16);
    fillGrid(16);
  }
  createGrid(size);
  fillGrid(size);
}
