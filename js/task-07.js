const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const changeSize = (info) => {
  span.style.fontSize = `${info.currentTarget.value}px`;
  console.log(input.value);
};
input.addEventListener("input", changeSize);
