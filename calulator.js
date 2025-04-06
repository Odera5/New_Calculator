function add(a, b) {
  display.textContent = a + b;
  arrvalue = display.textContent;
}
function subtract(a, b) {
  display.textContent = a - b;
  arrvalue = display.textContent;
}
function multiply(a, b) {
  display.textContent = a * b;
  arrvalue = display.textContent;
}
function divide(a, b) {
  display.textContent = a / b;
  arrvalue = display.textContent;
}
const calcContainer = document.querySelector("#calc-container");
const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
const camio = document.createElement("div");
camio.textContent = "Camio";
camio.classList.add("camio");
calcContainer.appendChild(camio);
const display = document.createElement("p");
display.textContent = "0";
display.classList.add("display");
calcContainer.appendChild(display);
const numContainer = document.createElement("div");
const operatorContainer = document.createElement("div");
operatorContainer.classList.add("operatorContainer");
numContainer.classList.add("numContainer");
calcContainer.appendChild(btnContainer);
btnContainer.appendChild(numContainer);
btnContainer.appendChild(operatorContainer);

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let operator = ["+", "-", "/", "x"];

let arrvalue = "";
let input1;
let operatorValue;
let input2;

function createcalcBtn() {
  for (let i = 0; i <= arrNum.length - 1; i++) {
    const nums = document.createElement("div");
    nums.classList.add("nums");
    nums.textContent = arrNum[i];
    //nums.style.backgroundColor = "red";
    numContainer.appendChild(nums);
    nums.addEventListener("click", () => {
      if (nums.textContent == 1) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 2) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 3) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 4) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 5) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 6) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 7) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 8) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 9) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      } else if (nums.textContent == 0) {
        arrvalue = arrvalue.concat(nums.textContent);
        display.textContent = arrvalue;
      }
    });
  }
}
createcalcBtn();

function createOperatorBtn() {
  operator.forEach((opera) => {
    const operatorBtn = document.createElement("div");
    operatorBtn.classList.add("operator");
    operatorBtn.textContent = opera;
    operatorContainer.appendChild(operatorBtn);

    operatorBtn.addEventListener("click", () => {
      if (operatorBtn.textContent == "+") {
        input1 = arrvalue;
        input1 = Number(input1);
        operatorValue = "+";
        arrvalue = "";
      } else if (operatorBtn.textContent == "-") {
        input1 = arrvalue;
        input1 = Number(input1);
        operatorValue = "-";
        arrvalue = "";
      } else if (operatorBtn.textContent == "/") {
        input1 = arrvalue;
        input1 = Number(input1);
        operatorValue = "/";
        arrvalue = "";
      } else if (operatorBtn.textContent == "x") {
        input1 = arrvalue;
        input1 = Number(input1);
        operatorValue = "x";
        arrvalue = "";
      }
    });
  });
}
createOperatorBtn();

function equalTo() {
  const equal = document.createElement("div");
  equal.textContent = "=";
  equal.classList.add("nums");
  numContainer.appendChild(equal);
  equal.addEventListener("click", () => {
    input2 = arrvalue;
    input2 = Number(input2);
    if (operatorValue == "+") {
      add(input1, input2);
    } else if (operatorValue == "-") {
      subtract(input1, input2);
    } else if (operatorValue == "/") {
      divide(input1, input2);
    } else if (operatorValue == "x") {
      multiply(input1, input2);
    }
  });
}
equalTo();

function cancelBtn() {
  const cancel = document.createElement("div");
  cancel.textContent = "C";
  cancel.classList.add("nums");
  cancel.style.fontFamily = "sans-serif";
  numContainer.appendChild(cancel);
  cancel.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "0";
    arrvalue = "";
  });
}
cancelBtn();
