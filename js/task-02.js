const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const siteNav = document.querySelector("ul");
const components = [];
ingredients.forEach((ingredient) => {
  const newNavItem = document.createElement("li");
  newNavItem.classList.add("item");
  newNavItem.textContent = ingredient;
  components.push(newNavItem);
});
siteNav.append(...components);
console.log(siteNav);
