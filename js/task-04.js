let counter = 0;

const sum = document.querySelector(".js-counter");

const decrement = document.querySelector(".js-decrement");
const increment = document.querySelector(".js-increment");

decrement.addEventListener("click", onClick);
increment.addEventListener("click", onClick);

function onClick(event) {
  if (event.currentTarget.textContent < 0) {
    sum.textContent = counter -= 1;

    return;
  }

  sum.textContent = counter += 1;
}
