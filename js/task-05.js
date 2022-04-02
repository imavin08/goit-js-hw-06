const onInput = document.querySelector("#name-input");
const onOutput = document.querySelector("#name-output");

const currentInput = (event) => {
  onOutput.textContent = event.currentTarget.value;
  if (onOutput.textContent === "") {
    onOutput.textContent = "Anonymous";
  }
};

onInput.addEventListener("input", currentInput);
