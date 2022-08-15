function addGridElement(quantity) {
    const gridDisplay = document.getElementById('gridDisplay');
    const divArray = [];

    for (let i = 0; i < quantity; i++) {
        let div = document.createElement('div');
        div.classList.add('gridElement')
        divArray.push(div);
    }

    divArray.forEach((item) => {
        gridDisplay.appendChild(item);
    }
    ) 
}