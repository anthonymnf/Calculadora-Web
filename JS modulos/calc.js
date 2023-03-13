// Imports
import calculate from "./functCalculate.js";
import copyToClipboard from "./copyToClipboard.js";
import themeSwitcher from "./themeSwitcher.js";
import { handleBtnPress, handleClearBtn, handleTyping } from "./keyHandlers.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleBtnPress);
});

document.getElementById("clear").addEventListener("click", handleClearBtn);

document.getElementById("input").addEventListener("keydown", handleTyping);

document.getElementById("equal").addEventListener("click", calculate);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
