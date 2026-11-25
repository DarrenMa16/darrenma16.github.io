const themes = [
  { id: "blue", label: "Blue" },
  { id: "terminal", label: "Terminal" },
  { id: "vscode", label: "VS Code" },
];

const button = document.getElementById("theme-toggle");
const root = document.documentElement;

function currentIndex() {
  const id = root.getAttribute("data-theme") || "blue";
  const i = themes.findIndex((t) => t.id === id);
  return i === -1 ? 0 : i;
}

function updateLabel() {
  const next = themes[(currentIndex() + 1) % themes.length];
  button.textContent = "Theme: " + themes[currentIndex()].label;
  button.setAttribute("aria-label", "Switch theme to " + next.label);
}

button.addEventListener("click", () => {
  const next = themes[(currentIndex() + 1) % themes.length];
  root.setAttribute("data-theme", next.id);
  try {
    localStorage.setItem("theme", next.id);
  } catch (e) {}
  updateLabel();
});

updateLabel();