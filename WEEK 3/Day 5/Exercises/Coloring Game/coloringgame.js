const gridContainer = document.getElementById('grid-container');
const palette = document.getElementById('color-palette');
const clearBtn = document.getElementById('clearBtn');

let currentColor = 'black';
let isDrawing = false;

// Create 400 squares (20x20)
for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);

    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = currentColor;
    });

    square.addEventListener('mouseover', () => {
        if (isDrawing) {
            square.style.backgroundColor = currentColor;
        }
    });

    square.addEventListener('mouseup', () => {
        isDrawing = false;
    });
}

// Color selection
palette.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-option')) {
        currentColor = e.target.getAttribute('data-color');
    }
});

// Global mouseup
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Clear button
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    });
});