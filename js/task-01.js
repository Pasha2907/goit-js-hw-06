const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.firstElementChild;
  console.log(`Elements: ${title.textContent}`);
  const content = category.lastElementChild;
  console.log(`Elements: ${content.children.length}`);
});
