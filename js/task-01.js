const categories = document.querySelector(".js-categories");

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((item) => {
  console.log(`Category: ${item.children[0].textContent}
Elements: ${item.children[1].children.length}`);
});
