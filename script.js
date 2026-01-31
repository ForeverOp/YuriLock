const editor = document.getElementById("editor");
const key = editor.dataset.key;

// carregar
const saved = localStorage.getItem(key);
if (saved) editor.innerText = saved;

// salvar infinito
editor.addEventListener("input", () => {
  localStorage.setItem(key, editor.innerText);
});