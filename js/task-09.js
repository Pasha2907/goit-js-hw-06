const btn = document.querySelector(".change-color");
const text = document.querySelector("span.color");
const body = document.querySelector("body");

btn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const newColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0);
  text.textContent = newColor;
  body.style.backgroundColor = text.textContent;
}
