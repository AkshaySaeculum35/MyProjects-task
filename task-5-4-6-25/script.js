const darkTheme = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const themeText = document.querySelector(".wrapper em");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    console.log("dark");

    themeText.innerHTML = "Light Mode";

    document.querySelector("header").style.opacity = 0.6;
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    console.log("light");
    themeText.innerHTML = "Dark Mode";

    document.querySelector("header").style.opacity = "";
  }
}

darkTheme.addEventListener("change", switchTheme, false);
