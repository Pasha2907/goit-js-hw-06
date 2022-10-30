const ref = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${ref.value}px`;

ref.addEventListener("input", () => {
  const fontSizeText = Number(ref.value);
  text.style.fontSize = `${fontSizeText}px`;
});
