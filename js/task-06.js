const ref = document.querySelector("#validation-input");

ref.addEventListener("blur", checkInput);

function checkInput(event) {
  ref.classList.remove("valid");
  ref.classList.remove("invalid");
  if (event.carentTarget.value.length == ref.dataset.length) {
    ref.classlist.add("valid");
  } else {
    ref.classlist.add("invalid");
  }
}
