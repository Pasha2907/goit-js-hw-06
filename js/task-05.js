const ref = document.querySelector("input#name-input");
const userName = document.querySelector("span#name-output");

function changeName(event) {
  if (event.currentTarget.value !== "") {
    userName.textContent = event.currentTarget.value;
  } else {
    userName.textContent = "Anonymous";
  }
}
ref.addEventListener("input", changeName);
