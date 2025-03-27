// textarea
const markdownInput = document.querySelector("#markdown-input");
// section preview
const previewSection = document.querySelector("#preview-section");
const changeBoldOrCursive = document.querySelector("#change-bold-or-cursive");
const inputFile = document.querySelector("#input-file");
const loading = document.querySelector("#loading");

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

function readFileAsPromise(file) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();

    setTimeout(() => {
      lector.readAsText(file);

      lector.onload = function () {
        resolve(lector.result);
      };

      lector.onerror = function () {
        reject("Error al leer el archivo");
      };
    }, 2000);
  });
}

const debounceRender = debounce(renderOnInput, 300);

// inputFile.addEventListener("change", function (event) {
//   const archivo = event.target.files[0];

//   loading.classList.remove("hidden");

//   readFileAsPromise(archivo)
//     .then((value) => {
//       console.log("TEXTO:", value);
//       markdownInput.value = value;
//       debounceRender();
//     })
//     .catch((error) => {
//       console.log("Error", error);
//     })
//     .finally(() => {
//       loading.classList.add("hidden");
//     });
// });

inputFile.addEventListener("change", async function (event) {
  const archivo = event.target.files[0];

  loading.classList.remove("hidden");

  try {
    const text = await readFileAsPromise(archivo);
    markdownInput.value = text;
    debounceRender();
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("hidden");
  }
});

markdownInput.addEventListener("input", debounceRender);

markdownInput.addEventListener("select", function (event) {
  getSelectedText(event);
});

changeBoldOrCursive.addEventListener("click", function () {
  getTextFromTextArea(convertToHtml);
});
