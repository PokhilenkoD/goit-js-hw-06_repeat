const refs = {
  slider: document.querySelector(".js-slider"),
  text: document.querySelector(".js-text"),
};
const { slider, text } = refs;

slider.addEventListener("input", onMove);

function onMove(e) {
  text.style.fontSize = `${e.currentTarget.value}px`;
}
