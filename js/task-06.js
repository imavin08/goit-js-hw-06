const onInput = document.querySelector("#validation-input");

const correctLength = () => {
  Number(onInput.dataset.length) === Number(onInput.value.length)
    ? onInput.classList.add("valid")
    : onInput.classList.add("invalid");
};

onInput.addEventListener("blur", correctLength);
