const form = document.querySelector(".login-form");
form.addEventListener("submit", sub);
function sub(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  event.currentTarget.reset();
}
