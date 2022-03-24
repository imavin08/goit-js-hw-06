const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeFoodList = (foods) => {
  return foods.map((food) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = food;
    return itemEl;
  });
};

const newElements = makeFoodList(ingredients);
ingredientsEl.append(...newElements);
