const form = document.querySelector(".js-form");
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const emailValue = e.currentTarget.elements.email.value;
  const passwordValue = e.currentTarget.elements.password.value;
  if (!emailValue.length || !passwordValue) {
    alert("All strings must filled!");
    return;
  }
  console.log({
    email: emailValue,
    password: passwordValue,
  });
  form.reset();
}
