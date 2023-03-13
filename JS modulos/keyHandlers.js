import calculate from "./functCalculate.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");

export function handleBtnPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

export function handleClearBtn() {
  input.value = " ";
  resultInput.value = " ";
  input.focus();
  resultInput.classList.remove("error");
}

export function handleTyping(ev) {
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
}
