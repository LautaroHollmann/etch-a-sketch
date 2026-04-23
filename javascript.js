const container = document.querySelector(".container")

// Create 16x16 (256) divs with a loop and append them to the container div:
let divs = [""];

for (let i=0; i<256; i++) {
    divs.push(i);
    let gridDivs = document.createElement("div");
    gridDivs.className = "gridDivs";
    container.appendChild(gridDivs);
}


// make these 256 divs flex and square in a 16x16 grid within the container div!