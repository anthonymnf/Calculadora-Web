export default function (ev) {
  const copyButton = ev.currentTarget;
  const resultInput = document.getElementById("result");
  if (copyButton.innerText === "Copiar") {
    copyButton.innerText = "Copiado";
    copyButton.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
    resultInput.value = " ";
  } else {
    copyButton.innerText = "Copiar";
    copyButton.classList.remove("success");
  }
}
