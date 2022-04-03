const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = "56px";

const changeSize = (info) => {
  span.style.fontSize = `${info.currentTarget.value}px`;
};
input.addEventListener("input", changeSize);
