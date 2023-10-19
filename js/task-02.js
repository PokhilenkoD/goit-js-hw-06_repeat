const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(".js-ingredients");

const items = ingredients.map((ing) => {
  const li = document.createElement("li");
  li.textContent = ing;
  li.classList.add("item");

  return li;
});
list.append(...items);
