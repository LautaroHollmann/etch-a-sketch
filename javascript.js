const container = document.querySelector(".container")

// Create 16 divs with a loop and append them to the container div:
let divs = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12", "div13", "div14", "div15", "div16"];
for(let i = 0; i < divs.length; i++) {
    let divs16 = document.createElement("div");
    divs16.className = "divs16";
    divs16.innerText = `${divs[i]}`;
    container.appendChild(divs16);
}

// make these 16 divs flex and square in a 16x16 grid within the container div!