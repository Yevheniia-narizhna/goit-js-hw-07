const allIiItems = document.querySelector("#categories");
const lengthItems = allIiItems.children.length;

console.log(`Number of categories: ${lengthItems}`);

const titlesCtegories = document.querySelectorAll("h2");
titlesCtegories.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
