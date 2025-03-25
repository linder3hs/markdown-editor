const textContent = document.querySelector("#text-content");
const lettersCount = document.querySelector("#letters-count");
const lettersRemainder = document.querySelector("#letters-remainder");

const MAX_LENGTH_CHARACTERS = 150;

lettersCount.textContent = "0";
lettersRemainder.textContent = MAX_LENGTH_CHARACTERS;

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function lettersCountAndRemainder() {
  const currentLetterCount = textContent.value.length;
  if (currentLetterCount > MAX_LENGTH_CHARACTERS) {
    textContent.value = textContent.value.substring(0, MAX_LENGTH_CHARACTERS);
  }

  lettersCount.textContent = textContent.value.length;
  lettersRemainder.textContent =
    MAX_LENGTH_CHARACTERS - textContent.value.length;
}

// 1 segundo = 1000 milisegundos
const debounceCount = debounce(lettersCountAndRemainder, 300); // milisegundo
textContent.addEventListener("input", debounceCount);
