const container = document.querySelector('#container');
const etch = document.querySelector('.etch');
const gridRow = document.createElement('div');
const resizeBtn = document.getElementById('refresh');
const randomBtn = document.getElementById('randomBtn');
let gridSize = 30;
gridMeasuremnt = 500/gridSize;
let random = false;

//Creating grid
function createGrid() {
    container.innerHTML = "";
    let gridMeasuremnt = 500/gridSize;
    for (i=0; i<gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('style', 'height :' + `${gridMeasuremnt}` + 'px');
        gridRow.classList.add('gridRow');
        container.appendChild(gridRow);
        for (j=0; j<gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            gridRow.appendChild(square);
            square.setAttribute("style", 
            'height :' + `${gridMeasuremnt}` + 'px; width :' + `${gridMeasuremnt}` + 'px; opacity: 0');
            square.addEventListener("mouseover", alterSquare);
        }
    }
}

// Depending on color selection changes opacity of square on mouseover
function alterSquare () {
    if (random === true) {
        this.style.background = "rgb("+Math.floor(Math.random()*256) + ","+
        Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
        this.style.opacity = parseFloat(this.style.opacity) + 0.25;
    } else {
        this.style.background = "black";
        this.style.opacity = parseFloat(this.style.opacity) + 0.25;
    }
}

// Adding and removing shake effect
resizeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    etch.classList.add("apply-shake");
    container.innerHTML = "";
    createGrid();
});
etch.addEventListener("animationend", (e) => {
    etch.classList.remove("apply-shake");
});

// Creates new grid when new values given by user
function newGridNum() {
    if (parseInt(noOfPixels.value) < 101 && parseInt(noOfPixels.value) > 1 ){
        numChoice = parseInt(noOfPixels.value);
        numChoiceInt = parseInt(numChoice);
    } else {
        alert("Pick an integer between 2-100");
    }
    gridSize = numChoiceInt;
    createGrid();
}

//Event Listeners
//Toggle between black and color
randomBtn.addEventListener("click", (e) => {
    if (randomBtn.innerHTML == "Random") {
        random = true;
        createGrid();
        randomBtn.innerHTML = "Black"
    } else {
        random = false;
        createGrid();
        randomBtn.innerHTML = "Random"
    }
});
submitBtn.addEventListener("click", newGridNum);
submitBtn.addEventListener("click", createGrid);

createGrid();


