function getSelectedText(event) {
  const start = event.target.selectionStart;
  const end = event.target.selectionEnd;
  currentSelectedText = event.target.value.substring(start, end);
}
