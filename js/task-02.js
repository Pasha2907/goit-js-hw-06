const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const siteNav = document.querySelector("ul");
const kek = [];
ingredients.forEach((ingredient) => {
  const newNavItem = document.createElement("li");
  newNavItem.classList.add("item");
  newNavItem.textContent = ingredient;
  kek.push(newNavItem);
});
siteNav.append(...kek);
console.log(siteNav);
