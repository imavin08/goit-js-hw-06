// -1-
const linksEl = document.querySelectorAll(".item");
console.log(`Number of categories:${linksEl.length}`);

const titleEl = document.querySelectorAll("h2");
console.log(`Category: ${titleEl[0].textContent}`);

const firstItemEl = document.querySelector(".item");
const firstItemLastChildEl = firstItemEl.lastElementChild;
console.log(`Elements: ${firstItemLastChildEl.children.length}`);

// -2-

console.log(`Category: ${titleEl[1].textContent}`);

const allItemEl = document.querySelector("#categories");
const secondItemEl = allItemEl.children[1];
const secondItemLastShildEl = secondItemEl.lastElementChild;
console.log(`Elements: ${secondItemLastShildEl.children.length}`);

// -3-

console.log(`Category: ${titleEl[2].textContent}`);

const thirdItemEl = allItemEl.lastElementChild;
const thirdItemLastShildEl = thirdItemEl.lastElementChild;
console.log(`Elements: ${thirdItemLastShildEl.children.length}`);
