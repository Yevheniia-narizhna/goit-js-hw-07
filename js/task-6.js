function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberValue = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.alignItems = "flex-start";
boxes.style.marginTop = "30px";
boxes.style.gap = "44px";

function createBoxes(amount) {
  const boxesItems = [];
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    boxesItems.push(div);

    boxSize += 10;
  }
  boxes.append(...boxesItems);
}

buttonCreate.addEventListener("click", () => {
  const amount = numberValue.value;
  const valueMax = Number(numberValue.max);
  const valueMin = Number(numberValue.min);
  if (amount >= valueMin && amount <= valueMax) {
    createBoxes(amount);
  }
  numberValue.value = "";
});
buttonDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
