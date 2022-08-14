function addGridElement(quantity) {
    const gridDisplay = document.getElementById('gridDisplay');
    const divArray = [];

    for (let i = 0; i < quantity; i++) {
        divArray.push(document.createElement('div'));
    }

    divArray.forEach((item) => {
        gridDisplay.appendChild(item);
    }
    ) 
}