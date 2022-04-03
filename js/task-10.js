function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destoyBtnEl = document.querySelector("[data-destroy]");

let amount = 0;

function getAmount() {
  amount = Number(inputEl.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  const array = [];
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);
  }
  boxesEl.append(...array);
  inputEl.value = "";
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

createBtnEl.addEventListener("click", getAmount);
destoyBtnEl.addEventListener("click", destroyBoxes);
