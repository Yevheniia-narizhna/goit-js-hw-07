const textInput = document.querySelector(`#name-input`);
const outputText = document.querySelector(`#name-output`);

textInput.addEventListener("input", (event) => {
  outputText.textContent =
    textInput.value !== "" ? event.currentTarget.value : "Anonymous";
});
