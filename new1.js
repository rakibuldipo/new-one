

// ---------stype-1----------
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// ---------stype-2----------

const bulebutton = document.getElementById('make-blue-button');
bulebutton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// ---------stype-3----------

const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const whiteButton = document.getElementById('make-white-button');
whiteButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'white';
}

// ---------stype-4----------
const goldenButton = document.getElementById('make-goldenrod');

goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// ---------stype-4----------


document.getElementById('blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})