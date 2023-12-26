
function createGrid(size = 16, className = 'grid-16x16') {
    let container = document.querySelector('.container')
    container.innerHTML = '';
    for(let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        container.classList.remove('grid-16x16', 'grid-32x32', 'grid-64x64');
        container.classList.add(className);
        square.classList.add('square');
        container.appendChild(square);
    }
}

function chooseGrid() {
    let sizeButtons = document.querySelectorAll('.size-buttons button');
    sizeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('small')) {
                createGrid(16, 'grid-16x16');
            } else if (button.classList.contains('medium')) {
                createGrid(32, 'grid-32x32');
            } else if (button.classList.contains('large')) {
                createGrid(64, 'grid-64x64');
            }
        });
    });
}

function drawColor(name, color) {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        if (name === 'black' || name === 'white')  {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = color;
            })
        } else if (name === 'rainbow') {
            let randomColors = color[Math.floor(Math.random() * color.length)];
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = randomColors;
            })
        }
    })
}

function chooseColor() {
    let colorButtons = document.querySelectorAll('.color-buttons button');
    colorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('black')) {
                drawColor('black', '#000000');
            } else if (button.classList.contains('white')) {
                drawColor('white', '#FFFFFF');
            } else if (button.classList.contains('rainbow')) {
                let randomColors = [];
                for(let i = 0; i < 255; i++) {
                    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    randomColors.push(randomColor);
                }
                drawColor('rainbow', randomColors);
            }
        });
    });
}

chooseGrid();
createGrid();
chooseColor();


