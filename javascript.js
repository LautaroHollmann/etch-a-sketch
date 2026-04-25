const container = document.querySelector(".container")
//New Grid Button:
const gridBtn = document.querySelector(".gridBtn")

let isDrawing = false;

// toggle drawing mode by click
container.addEventListener("click", () => {
  isDrawing = !isDrawing;
});

// Create 16x16 (256) divs with a loop and append them to the container div (see function further down):
generateNewGrid(16);

gridBtn.addEventListener("click", () => {
  const input = prompt("Please enter the new grid size (1-100)");
  if (input === null) return;

  //conversion of valid numeric strings to numbers:
  const newGrid = Number(input);

  //alert if the number from the newGrid const is NOT an integer, is smaller than 0 or bigger than 100
  if (!Number.isInteger(newGrid) || newGrid <= 0 || newGrid > 100) {
    alert("Enter a number between 1 and 100");
    return;
  }

  //Call newGrid Function with prompt input (input --> newGrid = Number(input))
  generateNewGrid(newGrid);
});

//Function to generate a new Grid
function generateNewGrid(size) {
  //clear the old grid
  container.innerHTML = "";

  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  //adjust cellsize based on input for grid #1
  const cellSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const gridDivs = document.createElement("div");
    gridDivs.className = "gridDivs";

    //adjust cellsize based on input for grid #2
    gridDivs.style.width = `${cellSize}%`;
    gridDivs.style.height = `${cellSize}%`;

    gridDivs.addEventListener("mouseover", () => {
      if (isDrawing) {
        gridDivs.classList.add("active");
      }
    });

    container.appendChild(gridDivs);
  }
}


/*Alternative hover in js through event delegation (stays):
document.addEventListener("mouseover", (e2) => {
  if (e2.target.classList.contains("gridDivs")) {
    e2.target.style.backgroundColor = "red";
  }
});

document.addEventListener("mouseout", (e3) => {
  if (e3.target.classList.contains("gridDivs")) {
    e3.target.style.backgroundColor = "blue";
  }
});
*/