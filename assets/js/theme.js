// Light/dark mode. Loaded in the <head> so the page doesn't flicker.

let setTheme = (theme) => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => document.documentElement.classList.remove("transition"), 500);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
};

let toggleTheme = (theme) => setTheme(theme == "dark" ? "light" : "dark");

let initTheme = (theme) => {
  if (theme == null || theme == "null") {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }
  setTheme(theme);
};

initTheme(localStorage.getItem("theme"));
