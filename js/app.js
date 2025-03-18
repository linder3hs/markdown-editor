/**
 * Variables para obtener elementos HTML
 */
const generateHtml = document.querySelector("#generate-html");
const markdownInput = document.querySelector("#markdown-input");
const previewSection = document.querySelector("#preview-section");

function getTextFromTextArea() {
  const text = markdownInput.value;
  return text;
}

function convertHeadings(html) {
  html = html.replace(
    /^# (.+)$/gm,
    "<h1 class='text-6xl font-bold border-b'>$1</h1>"
  );
  // ## titulo -> <h2>titulo</h2>
  html = html.replace(
    /^## (.+)$/gm,
    "<h2 class='text-5xl font-bold border-b'>$1</h2>"
  );
  html = html.replace(/^### (.+)$/gm, "<h3 class='text-4xl font-bold'>$1</h3>");
  html = html.replace(
    /^#### (.+)$/gm,
    "<h4 class='text-3xl font-bold'>$1</h4>"
  );
  html = html.replace(
    /^##### (.+)$/gm,
    "<h5 class='text-2xl font-bold'>$1</h5>"
  );
  html = html.replace(
    /^###### (.+)$/gm,
    "<h6 class='text-xl font-bold'>$1</h6>"
  );

  return html;
}

function convertToHtml(text) {
  let html = text;
  // evaluamos titulo
  html = convertHeadings(html);
  // evaluamos listas
  // evaluamos enlaces

  return html;
}

function renderPreview(html) {
  previewSection.innerHTML = html;
}

// TODO: Cuando hagamos click en el boton generateHtml, tenemos que obtener el texto del textarea y trasnformalo a HTML y eso mostrarlo el preview
generateHtml.addEventListener("click", function () {
  // para obtener el texto de un input usamos el .value
  const text = getTextFromTextArea(); // Obtiene el value del textarea
  const html = convertToHtml(text); // convierte el value a un HTML
  renderPreview(html); // HTML lo muestra en el preview
});
