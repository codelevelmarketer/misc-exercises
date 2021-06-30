const buttons = document.querySelectorAll("button");
const calcDisplay = document.querySelector(".calculator-display");

// Variables used to track results and manage the state
let firstValue = "";
let secondValue = "";
let operatorSelected = false;
let operationCompleted = false;

// Attaching event handlers to each of the buttons, sending text content to appropriate function
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (Number.isInteger(+element.textContent)) {
      checkNumber(element.textContent);
    } else {
      operatorSelection(element.textContent);
    }
  });
});

// When a button is clicked, it calls this function to start compiling either the first or second value string. If operator selected is false, then it compiles first value; if true, then it compiles second string
function checkNumber(num) {
  if (operatorSelected === false) {
    firstValue += num;
    display();
  } else {
    secondValue += num;
    display();
  }
}

// When operator is selected, this function routes them to the correct function to perform and additional operation
function operatorSelection(operation) {
  if (operation === "Clear") {
    clearOperator();
  } else if (operation === "Delete") {
    deleteOperator();
  } else if (operation === ".") {
    decimalOperator();
  } else {
    operate(operation);
  }
}
let currentOperation;
let previousOperation;
// This function takes the operation provided in the operatorSelection function and routes it to correct math function
function operate(operation) {
  // if (operationCompleted == true) {
  //   operationCompleted = false;
  // }
  if (currentOperation != "") {
    previousOperation = currentOperation;
  }
  if (operation != "=") {
    currentOperation = operation;
  }
  if (operatorSelected == false) {
    operatorSelected = true;
  }

  if (operation === "÷") {
    if (secondValue != "" && previousOperation == "") {
      divide(firstValue, secondValue);
    } else if (previousOperation === "÷") {
      divide(firstValue, secondValue);
    } else if (previousOperation === "×") {
      multiply(firstValue, secondValue);
    } else if (previousOperation === "-") {
      subtract(firstValue, secondValue);
    } else if (previousOperation === "+") {
      add(firstValue, secondValue);
    }
  }
  if (operation === "×") {
    if (secondValue != "" && previousOperation == "") {
      multiply(firstValue, secondValue);
    } else if (previousOperation === "÷") {
      divide(firstValue, secondValue);
    } else if (previousOperation === "×") {
      multiply(firstValue, secondValue);
    } else if (previousOperation === "-") {
      subtract(firstValue, secondValue);
    } else if (previousOperation === "+") {
      add(firstValue, secondValue);
    }
  }
  if (operation === "-") {
    if (secondValue != "" && previousOperation == "") {
      subtract(firstValue, secondValue);
    } else if (previousOperation === "÷") {
      divide(firstValue, secondValue);
    } else if (previousOperation === "×") {
      multiply(firstValue, secondValue);
    } else if (previousOperation === "-") {
      subtract(firstValue, secondValue);
    } else if (previousOperation === "+") {
      add(firstValue, secondValue);
    }
  }
  if (operation === "+") {
    if (secondValue != "" && previousOperation == "") {
      add(firstValue, secondValue);
    } else if (previousOperation === "÷") {
      divide(firstValue, secondValue);
    } else if (previousOperation === "×") {
      multiply(firstValue, secondValue);
    } else if (previousOperation === "-") {
      subtract(firstValue, secondValue);
    } else if (previousOperation === "+") {
      add(firstValue, secondValue);
    }
  }
  if (operation === "=") {
    if (secondValue) {
      if (currentOperation === "÷") {
        divide(firstValue, secondValue);
      } else if (currentOperation === "×") {
        multiply(firstValue, secondValue);
      } else if (currentOperation === "-") {
        subtract(firstValue, secondValue);
      } else if (currentOperation === "+") {
        add(firstValue, secondValue);
      }
    }
  }
}

function add(a, b) {
  firstValue = +firstValue + +secondValue;
  console.log(firstValue);
  operationCompleted = true;
  display();
}

function divide(a, b) {
  firstValue = firstValue / secondValue;
  operationCompleted = true;
  display();
}

function subtract(a, b) {
  firstValue = firstValue - secondValue;
  operationCompleted = true;
  display();
}

function multiply(a, b) {
  firstValue = firstValue * secondValue;
  operationCompleted = true;
  display();
}

// managing the case where decimal button is clicked
function decimalOperator() {
  if (
    (operatorSelected === false && firstValue.includes(".")) ||
    (operatorSelected === true && secondValue.includes("."))
  ) {
    return;
  }
  if (firstValue)
    if (operatorSelected === false && firstValue != 0) {
      firstValue += ".";
      display();
    } else {
      secondValue += ".";
      display();
    }
}

// When the clear button is clicked, the display, first value, and second value are reset.
function clearOperator() {
  calcDisplay.textContent = 0;
  firstValue = "";
  secondValue = "";
  operatorSelected = false;
}

// When delete button is clicked, delete the last element in the string // most recent one added, but replace with 0 if string is empty
function deleteOperator() {
  if (operatorSelected === false && firstValue != 0) {
    firstValue = firstValue.slice(0, -1);
    if (firstValue === "") {
      firstValue = "0";
      calcDisplay.textContent = firstValue;
    }
    calcDisplay.textContent = firstValue;
  } else if (operatorSelected === true && secondValue != 0) {
    secondValue = secondValue.slice(0, -1);
    if (secondValue === "") {
      secondValue = "0";
      calcDisplay.textContent = secondValue;
    }
    calcDisplay.textContent = secondValue;
  }
}

// This displays content to the end user
function display() {
  if (operatorSelected === false) {
    calcDisplay.textContent = firstValue;
  } else {
    calcDisplay.textContent = secondValue;
  }
  if (operationCompleted === true) {
    if (!Number.isInteger(firstValue)) {
      calcDisplay.textContent = firstValue.toFixed(5);
    } else {
      calcDisplay.textContent = firstValue;
    }
    secondValue = "";
    operationCompleted = false;
  }
}
