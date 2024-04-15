let screen = document.getElementById('screen');

function addToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function squareRoot() {
  screen.value = Math.sqrt(parseFloat(screen.value));
}

function square() {
  screen.value = Math.pow(parseFloat(screen.value), 2);
}

function percentage() {
  screen.value = parseFloat(screen.value) / 100;
}

function operation(operator) {
  screen.value += operator;
}

function calculate() {
  screen.value = eval(screen.value);
}
