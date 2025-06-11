const darkTheme = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const icons = document.querySelector(".icon span");
const txt = document.querySelector(".text-th");

const tag = document.documentElement;

function switchTheme(e) {
  if (e.target.checked) {
    tag.classList.remove("light");
    icons.innerHTML = "light_mode";
    txt.innerHTML = "Light Mode";
    tag.classList.toggle("dark");
    localStorage.setItem("theme", "dark");
  } else {
    tag.classList.remove("dark");
    icons.innerHTML = "dark_mode";
    txt.innerHTML = "Dark Mode";
    tag.classList.toggle("light");
    localStorage.setItem("theme", "light");
  }
}
darkTheme.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  tag.classList.add(currentTheme);
  darkTheme.checked = currentTheme === "dark";
}

if (currentTheme === "dark") {
  icons.innerHTML = "light_mode";
  txt.innerHTML = "Light Mode";
} else {
  icons.innerHTML = "dark_mode";
  txt.innerHTML = "Dark Mode";
}
