

function main() {
    function addGrid(amount) {
        let style = document.createElement('style');
        style.innerHTML = `
            .gridDisplay {
                box-sizing: content-box;
                display: grid;
                grid-template-columns: repeat(${amount}, 1fr);
                grid-template-rows: repeat(${amount}, 1fr);
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
    
    function addGridElement(amount) {
        const gridDisplay = document.querySelector('#gridDisplay');
        
        const divArray = [];
    
        for (let i = 0; i < (amount*amount); i++) {
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

    function selectGridElementAmount() {
        const slider = document.querySelector('#slider');
        slider.addEventListener('mouseup', (e) => {
            addGrid(e.target.value);
            addGridElement(e.target.value);
            addColor(document.querySelector('#colorPicker').value);
        })
    }

    function returnColor(){
        const colorPicker = document.querySelector('#colorPicker');
        colorPicker.addEventListener('focusout', (event) => {
            addColor(event.target.value);
        });
    }
    
    function addColor(color){
        let allElements = document.querySelectorAll('.gridElement');
        let pressed;

        document.querySelector('#gridDisplay').addEventListener('pointerleave', () => {
            pressed = 0;
        })

        allElements.forEach(e => {            
            e.addEventListener('pointerdown', () => {
                pressed = 1;
                e.style.backgroundColor = color;
                e.style.border =  'none';
            })            

            e.addEventListener('pointerup', () => {
                pressed = 0;
                e.style.backgroundColor = color;
                e.style.border =  'none';
            })
            e.addEventListener('dragstart', (dragStart) => {
                dragStart.preventDefault()
              })
              
            e.addEventListener('drop', (drop) => {
                drop.preventDefault()
              })

            e.addEventListener('drag', (drag) => {
                drag.preventDefault()
            })
        })        

        allElements.forEach(e => {
            e.addEventListener('pointerover', () => {
                if (pressed === 1) {
                    e.style.backgroundColor = color;
                    pressed = 1;
                    e.style.border =  'none';
                }
            })
        })

        

    }

    function erase() {
        document.querySelector('#eraser').addEventListener('click', () => {
            addColor('transparent')
        })
    }

    function restart() {
        document.querySelector('#restart').addEventListener('click', () => {
            addGrid(16)
            addGridElement(16)
            addColor('#000000')
        })
    }

    /* SET INITIAL VALUES */
    addGrid(16)
    addGridElement(16)
    addColor('#000000')

    /* CALL FUNCTIONS */
    selectGridElementAmount()
    returnColor()
    erase()
    restart()
}
main()