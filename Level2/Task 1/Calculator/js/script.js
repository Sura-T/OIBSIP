function appendToScreen(value) {
    var screen = document.getElementById('screen');
    screen.value += value;
}

function calculate() {
    var screen = document.getElementById('screen');
    try {
        var result = eval(screen.value);
        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}

function clearScreen() {
    var screen = document.getElementById('screen');
    screen.value = '';
}

function deleteLastCharacter() {
    var screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function squareRoot() {
    var screen = document.getElementById('screen');
    screen.value = Math.sqrt(eval(screen.value));
}

function modulo() {
    var screen = document.getElementById('screen');
    screen.value += '%';
}

function plusMinus() {
    var screen = document.getElementById('screen');
    if (screen.value.startsWith('-')) {
        screen.value = screen.value.substring(1);
    } else {
        screen.value = '-' + screen.value;
    }
}

function ans() {
    var screen = document.getElementById('screen');
    screen.value += 'ANS';
}