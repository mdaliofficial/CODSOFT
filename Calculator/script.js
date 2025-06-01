const display = document.getElementById("display");

function appendNumber(number) {
  display.textContent += number;
}

function appendOperation(operator) {
  display.textContent += operator;
}

function clearAll() {
  display.textContent = "";
}

function calculate() {
  try {
    const result = eval(display.textContent);
    display.textContent = result;
  } catch (error) {
    display.textContent = "Error";
  }
}
