export default function calculate() {
  const resultInput = document.getElementById("result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value); //O "eval" avalia tudo que for colocado dentro dele como um código JS, por isso que numa calculadora eu n preciso fazer uma função para cada operação. Mas cuidado pois se fosse possível colocar algum código nesse input o usuáio poderia colocar algum código malicioso
  resultInput.value = result;
  resultInput.classList.remove("error");
}

