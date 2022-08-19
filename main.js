function addGrid(quantity) {
    let style = document.createElement('style');
    style.innerHTML = `
        .gridDisplay {
            display: grid;
            grid-template-columns: repeat(${quantity}, 1fr);
            grid-template-rows: repeat(${quantity}, 1fr);
        }
    `;

    let script = document.querySelector('script');
    script.parentNode.insertBefore(style, script);
    const gridDisplay = document.querySelector('#gridDisplay');
    const allElements = document.querySelectorAll('.gridElement');
    
    Array.from(allElements).forEach((item)=> {
        gridDisplay.removeChild(item);
    })
}

function addGridElement(quantity) {
    const gridDisplay = document.querySelector('#gridDisplay');
    
    const divArray = [];

    for (let i = 0; i < (quantity*quantity); i++) {
        let div = document.createElement('div');
        div.classList.add('gridElement')
        divArray.push(div);
    }

    gridDisplay.classList.add('gridDisplay');

    divArray.forEach((item) => {
        gridDisplay.appendChild(item);
    }
    ) 
}

function returnColor(){
    const colorPicker = document.querySelector('#colorPicker');

    colorPicker.addEventListener('focusout', (event) => {
        console.log(event.srcElement.value);

    });
}