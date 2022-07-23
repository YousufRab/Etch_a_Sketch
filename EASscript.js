for (i = 0; i < 16; i++) {
    
    var divRow = document.createElement('div');
    document.body.appendChild(divRow);

    for (j = 0; j < 16; j++) {

        var divColumn = document.createElement('div');
        divRow.appendChild(divColumn);
    }
}

