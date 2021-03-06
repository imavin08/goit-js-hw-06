const onInput = document.querySelector("#validation-input");

const correctLength = () => {
  if (Number(onInput.dataset.length) !== Number(onInput.value.length)) {
    onInput.classList.remove("valid");
    onInput.classList.add("invalid");
  } else if (Number(onInput.dataset.length) === Number(onInput.value.length)) {
    onInput.classList.remove("invalid");
    onInput.classList.add("valid");
  }
};

onInput.addEventListener("blur", correctLength);


