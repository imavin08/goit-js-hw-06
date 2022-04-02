function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destoyBtnEl = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.append(box);
  }
  inputEl.value = "";
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

createBtnEl.addEventListener("click", createBoxes);
destoyBtnEl.addEventListener("click", destroyBoxes);
