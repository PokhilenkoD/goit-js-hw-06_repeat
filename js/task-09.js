const buttonColor = document.querySelector(".js-buttonColor");
const backGround = document.querySelector(".js-widget");
const text = document.querySelector(".js-text");

buttonColor.addEventListener("click", onClick);

function onClick(e) {
  const color = getRandomHexColor();
  backGround.style.backgroundColor = color;
  text.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
