const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("onclick");
    setTimeout(() => {
      button.classList.remove("onclick");
    }, 100);
  });
});
var num1 = "";
var num2 = "";
var key = "";
var entered = "";
var result = "";
let isResultDisplayed = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    entered += button.innerText;
    document.getElementById("result").classList.add("final");
    document.getElementById("result").innerText = entered;
    for (var i = 0; i < entered.length; i++) {
      if (
        entered[entered.length - 3] === "1" &&
        entered[entered.length - 2] === "/" &&
        entered[entered.length - 1] === "x"
      ) {
        num1 = entered.slice(0, entered.length - 3);
        num1 = 1 / num1;
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (
        entered[entered.length - 3] === "x" &&
        entered[entered.length - 2] === "^" &&
        entered[entered.length - 1] === "2"
      ) {
        num1 = entered.slice(0, entered.length - 3);
        num1 = num1 * num1;
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (
        entered[entered.length - 7] === "x" &&
        entered[entered.length - 6] === "^" &&
        entered[entered.length - 5] === "(" &&
        entered[entered.length - 4] === "1" &&
        entered[entered.length - 3] === "/" &&
        entered[entered.length - 2] === "2" &&
        entered[entered.length - 1] === ")"
      ) {
        num1 = entered.slice(0, entered.length - 7);
        num1 = Math.sqrt(num1);
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (
        ["*"].includes(entered[i]) &&
        entered[entered.length - 2] === "%" &&
        entered[entered.length - 1] === "="
      ) {
        key = entered[i];
        num1 = Number(entered.slice(0, i));
        entered = entered.slice(0, entered.length - 2);
        num2 = Number(entered.slice(i + 1, entered.length));
        result = (num1 * num2) / 100;
        document.getElementById("result").innerText = result;
      }
      if (["+", "-", "*", "/"].includes(entered[i])) {
        key = entered[i];
        num1 = Number(entered.slice(0, i));
        num2 = Number(entered.slice(i + 1, entered.length - 1));
        if (entered[entered.length - 1] === "=") {
          if (key === "+") result = num1 + num2;
          else if (key === "-") result = num1 - num2;
          else if (key === "*") result = num1 * num2;
          else if (key === "/") result = num1 / num2;
          document.getElementById("result").innerText = result;
        }
      }
      if (entered[entered.length - 1] === "C") {
        entered = "";
        document.getElementById("result").innerText = "";
      }
      if (
        entered[entered.length - 2] === "C" &&
        entered[entered.length - 1] === "E"
      ) {
        entered = entered.slice(0, entered.length - 3);
        document.getElementById("result").innerText = entered;
      }
      if (
        entered[entered.length - 3] === "C" &&
        entered[entered.length - 2] === "u" &&
        entered[entered.length - 1] === "t"
      ) {
        entered = entered.slice(0, entered.length - 4);
        document.getElementById("result").innerText = entered;
      }
      if (
        entered[entered.length - 3] === "+" &&
        entered[entered.length - 2] === "/" &&
        entered[entered.length - 1] === "-"
      ) {
        num1 = entered.slice(0, entered.length - 3);
        num1 = -1 * Number(num1);
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (document.getElementById("result").innerText == result) {
        isResultDisplayed = true;
        if (["+", "-", "*", "/", "="].includes(entered[i])) {
          entered = "" + result;
          num1 = result;
          num2 = "";
        }
      }
    }
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key) {
    entered += "" + event.key;
    document.getElementById("result").classList.add("final");
    if (event.key == "Enter") {
      entered = entered.slice(0, entered.length - 5);
      entered += "=";
    }
    if (event.key == "Backspace") {
      entered = entered.slice(0, entered.length - 10);
    }
    if (event.key === "c" || event.key === "C") {
      entered = "";
    }
    document.getElementById("result").innerText = entered;
    for (var i = 0; i < entered.length; i++) {
      if (
        entered[entered.length - 3] === "1" &&
        entered[entered.length - 2] === "/" &&
        entered[entered.length - 1] === "x"
      ) {
        num1 = entered.slice(0, entered.length - 3);
        num1 = 1 / num1;
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (
        entered[entered.length - 3] === "x" &&
        entered[entered.length - 2] === "^" &&
        entered[entered.length - 1] === "2"
      ) {
        num1 = entered.slice(0, entered.length - 3);
        num1 = num1 * num1;
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (
        entered[entered.length - 7] === "x" &&
        entered[entered.length - 6] === "^" &&
        entered[entered.length - 5] === "(" &&
        entered[entered.length - 4] === "1" &&
        entered[entered.length - 3] === "/" &&
        entered[entered.length - 2] === "2" &&
        entered[entered.length - 1] === ")"
      ) {
        num1 = entered.slice(0, entered.length - 7);
        num1 = Math.sqrt(num1);
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (
        ["*"].includes(entered[i]) &&
        entered[entered.length - 2] === "%" &&
        entered[entered.length - 1] === "="
      ) {
        key = entered[i];
        num1 = Number(entered.slice(0, i));
        entered = entered.slice(0, entered.length - 2);
        num2 = Number(entered.slice(i + 1, entered.length));
        result = (num1 * num2) / 100;
        document.getElementById("result").innerText = result;
      }
      if (["+", "-", "*", "/"].includes(entered[i])) {
        key = entered[i];
        num1 = Number(entered.slice(0, i));
        num2 = Number(entered.slice(i + 1, entered.length - 1));
      }
      if (
        entered[entered.length - 1] === "=" ||
        entered[entered.length - 1] === "Enter"
      ) {
        if (key === "+") result = num1 + num2;
        else if (key === "-") result = num1 - num2;
        else if (key === "*") result = num1 * num2;
        else if (key === "/") result = num1 / num2;
        document.getElementById("result").innerText = result;
      }
      if (entered[entered.length - 1] === "C") {
        entered = "";
        document.getElementById("result").innerText = "";
      }
      if (
        entered[entered.length - 2] === "C" &&
        entered[entered.length - 1] === "E"
      ) {
        entered = entered.slice(0, entered.length - 3);
        document.getElementById("result").innerText = entered;
      }
      if (
        entered[entered.length - 3] === "C" &&
        entered[entered.length - 2] === "u" &&
        entered[entered.length - 1] === "t"
      ) {
        entered = entered.slice(0, entered.length - 4);
        document.getElementById("result").innerText = entered;
      }
      if (
        entered[entered.length - 3] === "+" &&
        entered[entered.length - 2] === "/" &&
        entered[entered.length - 1] === "-"
      ) {
        num1 = entered.slice(0, entered.length - 3);
        num1 = -1 * Number(num1);
        document.getElementById("result").innerText = num1;
        entered = "" + num1;
      }
      if (document.getElementById("result").innerText == result) {
        isResultDisplayed = true;
        if (["+", "-", "*", "/", "="].includes(entered[i])) {
          entered = "" + result;
          num1 = result;
          num2 = "";
        }
      }
    }
  }
});
