const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let siteNav = document.querySelector("ul");

for (let i = 0; i < ingredients.length; i += 1) {
  let newNavItem = document.createElement("li");
  newNavItem.textContent = ingredients[i];
  newNavItem.classList.add("item");
  siteNav.append(newNavItem);
}
