const counterValue = document.querySelector("span#value");
counterValue.value = 0;

const decBtn = document.querySelector("[data-action=decrement]");
const incBtn = document.querySelector("[data-action=increment]");

const inc = () => {
  console.log("click +1");
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
};

const dec = () => {
  console.log("click -1");
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
};

decBtn.addEventListener("click", dec);
incBtn.addEventListener("click", inc);
