const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

// numGrids = userInput();

function userInput() {
    removeGrid();
    var numGrids = prompt("Enter a number between 16 to 100: ");
    return numGrids;
}

function removeGrid() {
    const grids = document.querySelectorAll('.divColumn');
    grids.forEach((grid) => grid.remove());
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

function changeClass(elemId) {
    const box = document.getElementById(elemId);
    box.classList.remove('divColumn');
    box.classList.add('hoveredColumn');
}

const grids = document.querySelectorAll('.divColumn');

// addEventListener is a method on the HTML Element so it needs to be accessed using dot notation. 
// The callback receives "event" as a parameter which contains lots of info about the user interaction
// event.target gets you to the HTML element that was interacted, it has an "id" property which can
// be passed to changeClass()
grids.forEach((grid) => grid.addEventListener('mouseover', (event) => {
    changeClass(event.target.id);
}));



