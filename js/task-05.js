const onInput = document.querySelector("#name-input");
const onOutput = document.querySelector("#name-output");

const currentInput = (event) => {
  onOutput.textContent = event.currentTarget.value;
};

onInput.addEventListener("input", currentInput);
