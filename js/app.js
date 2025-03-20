// button
const generateHtml = document.querySelector("#generate-html");
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

markdownInput.addEventListener("select", function (event) {
  getSelectedText(event);
});

generateHtml.addEventListener("click", function () {
  getTextFromTextArea(convertToHtml);
});

changeBoldOrCursive.addEventListener("click", function () {
  getTextFromTextArea(convertToHtml);
});
