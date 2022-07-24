const container = document.createElement('div');
      document.body.appendChild(container);
      container.classList.add('container');


for (i = 0; i < 16; i++) {
    
    var divRow = document.createElement('div');
    container.appendChild(divRow);
    divRow.classList.add('divRow');

    for (j = 0; j < 16; j++) {

        var divColumn = document.createElement('div');
        divRow.appendChild(divColumn);
        divColumn.classList.add('divColumn');
        divColumn.setAttribute('id', `${i}${j}`);
    }
}

function changeClass(elemId) {
    const box = document.getElementById(elemId);
    box.classList.remove('divColumn');
    box.classList.add('hoveredColumn');
}

const grids = document.querySelectorAll('.divColumn');

grids.forEach(() => addEventListener('mouseover', () => {
    changeClass()
}));



