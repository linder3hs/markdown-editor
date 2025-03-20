function getSelectedText(event) {
  const start = event.target.selectionStart;
  const end = event.target.selectionEnd;
  const selectedText = event.target.value.substring(start, end);
  console.log(selectedText);
}
