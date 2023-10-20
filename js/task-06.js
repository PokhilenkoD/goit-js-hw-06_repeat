const input = document.querySelector(".js-input");

input.addEventListener("blur", onPush);

function onPush(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
}
