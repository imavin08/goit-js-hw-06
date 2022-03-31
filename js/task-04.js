const minus = document.querySelector('[data-action="decrement"]');
const plus = document.querySelector('[data-action="increment"]');
const total = document.querySelector("#value");

let counterValue = 0;

const plussum = () => {
  total.textContent = counterValue += 1;
};

const minussum = () => {
  total.textContent = counterValue -= 1;
};

minus.addEventListener("click", minussum);
plus.addEventListener("click", plussum);
