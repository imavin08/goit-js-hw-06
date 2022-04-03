const allItemEl = document.querySelectorAll("#categories");

allItemEl.forEach((elem) => {
  console.log(`Number of categories: ${elem.children.length}`);

  // 1
  const firstEl = elem.firstElementChild;
  console.log(`Category: ${firstEl.firstElementChild.textContent}`);
  console.log(`Elements: ${firstEl.lastElementChild.children.length}`);

  // 2
  const secondEl = firstEl.nextElementSibling;
  console.log(`Category: ${secondEl.firstElementChild.textContent}`);
  console.log(`Elements: ${secondEl.lastElementChild.children.length}`);

  // 3
  const lastEl = elem.lastElementChild;
  console.log(`Category: ${lastEl.firstElementChild.textContent}`);
  console.log(`Elements: ${lastEl.lastElementChild.children.length}`);
});
