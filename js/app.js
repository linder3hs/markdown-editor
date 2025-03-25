// textarea
const markdownInput = document.querySelector("#markdown-input");
// section preview
const previewSection = document.querySelector("#preview-section");
const changeBoldOrCursive = document.querySelector("#change-bold-or-cursive");

let state = false;
let currentSelectedText = "";

function changeBtnName() {
  changeBoldOrCursive.textContent = state
    ? "Cambiar a Negrita"
    : "Cambiar a cursiva";
}

changeBtnName();

function renderOnInput() {
  getTextFromTextArea(convertToHtml);
}

const debounceRender = debounce(renderOnInput, 300);

markdownInput.addEventListener("input", debounceRender);

markdownInput.addEventListener("select", function (event) {
  getSelectedText(event);
});

changeBoldOrCursive.addEventListener("click", function () {
  getTextFromTextArea(convertToHtml);
});
