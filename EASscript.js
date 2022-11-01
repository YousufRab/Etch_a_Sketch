const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');
var numGrids = 0; 


//Generate initial 16x16 grid when page is loaded

for (i = 0; i < 16; i++) {

    var divRow = document.createElement('div');
    container.appendChild(divRow);
    divRow.classList.add('divRow');

    for (j = 0; j < 16; j++) {

        var divColumn = document.createElement('div');
        divRow.appendChild(divColumn);
        divColumn.classList.add('divColumn');
        divColumn.setAttribute('id', `${i}${i}${j}`);
    }
}

const grids = document.querySelectorAll('.divColumn');
// addEventListener is a method on the HTML Element so it needs to be accessed using dot notation. 
// The callback receives "event" as a parameter which contains lots of info about the user interaction
// event.target gets you to the HTML element that was interacted, it has an "id" property which can
// be passed to changeClass()
grids.forEach((grid) => grid.addEventListener('mouseover', (event) => {
    changeClass(event.target.id);
}));

const clearButton = document.querySelector('#btn');
clearButton.addEventListener('click', () => {
    removeGrid();
    numGrids = userInput();
    genGrid(numGrids);
    changeGridSize(numGrids);
    paintGrids();
});

function userInput() {
    var numGrids = parseInt(prompt("Enter a number between 16 to 100: "), 10);
    return numGrids;
}

function removeGrid() {
    const grids = document.querySelectorAll('.divColumn');
    grids.forEach((grid) => grid.remove());
    const rows = document.querySelectorAll('.divRow');
    rows.forEach((row) => row.remove());
    const colorGrids = document.querySelectorAll('.hoveredColumn')
    colorGrids.forEach((grid) => grid.remove());
}

function genGrid(numGrids) {
    if (numGrids < 16 || numGrids > 100 || !Number.isInteger(numGrids)) {
        alert("Must enter a number between 16-100");
    } else {
        for (i = 0; i < numGrids; i++) {

            var divRow = document.createElement('div');
            container.appendChild(divRow);
            divRow.classList.add('divRow');
        
            for (j = 0; j < numGrids; j++) {
        
                var divColumn = document.createElement('div');
                divRow.appendChild(divColumn);
                divColumn.classList.add('divColumn');
                divColumn.setAttribute('id', `${i}${i}${j}`);
            }
        }
    }
}

function changeClass(elemId) {
    const box = document.getElementById(elemId);
    box.classList.remove('divColumn');
    box.classList.add('hoveredColumn');
}

function paintGrids() {
    const grids = document.querySelectorAll('.divColumn');
    grids.forEach((grid) => grid.addEventListener('mouseover', (event) => {
        changeClass(event.target.id);
}))};

rainbow = () => {
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "#" + red.toHex() + green.toHex() + blue.toHex();
};

function changeGridSize (numGrids) {
    let x = 400/numGrids - 2;
    const grids = document.querySelectorAll('.divColumn');
    grids.forEach((grid) => {
        grid.style.width = `${x}px`
        grid.style.height = `${x}px`
    })
}




