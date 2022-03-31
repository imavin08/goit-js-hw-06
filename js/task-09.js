function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});
