const allItemEl = document.querySelectorAll(".item");

const count = (elements) => {
  console.log(`Number of categories: ${elements.length}`);
  elements.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
  });
};
count(allItemEl);
