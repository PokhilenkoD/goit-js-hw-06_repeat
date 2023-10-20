const name = document.querySelector(".js-name");
const input = document.querySelector(".js-input");

input.addEventListener("input", onLogin);

function onLogin(event) {
  if (event.currentTarget.value) {
    name.textContent = event.currentTarget.value;
    return;
  }
  name.textContent = "Anonymous";
}
