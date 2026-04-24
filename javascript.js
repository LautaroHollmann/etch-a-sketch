const container = document.querySelector(".container")

// Create 16x16 (256) divs with a loop and append them to the container div:
let divs = [""];

for (let i=0; i<256; i++) {
    divs.push(i);
    let gridDivs = document.createElement("div");
    gridDivs.className = "gridDivs";
    container.appendChild(gridDivs);
}

const hoverableGridDivs = document.querySelectorAll(".gridDivs");

hoverableGridDivs.forEach((element) => {
    element.addEventListener("mouseover", (e1) => {
        element.classList.add("active");
    });
});


/*Alternative hover in jss through event delegation (stays):
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