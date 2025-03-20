// button
const generateHtml = document.querySelector("#generate-html");
// textarea
const markdownInput = document.querySelector("#markdown-input");
// section preview
const previewSection = document.querySelector("#preview-section");

markdownInput.addEventListener("select", function (event) {
  getSelectedText(event);
});

generateHtml.addEventListener("click", function () {
  getTextFromTextArea(convertToHtml);
});
