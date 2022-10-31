const ref = document.querySelector("#validation-input");

ref.addEventListener("blur", checkInput);

function checkInput(event) {
  ref.classList.remove("valid");
  ref.classList.remove("invalid");
  if (event.currentTarget.value.length == ref.dataset.length) {
    ref.classList.add("valid");
  } else {
    ref.classList.add("invalid");
  }
}
