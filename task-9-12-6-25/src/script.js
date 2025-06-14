const darkTheme = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const icons = document.querySelector(".icon span");
const tag = document.documentElement;

function switchTheme(e) {
  if (e.target.checked) {
    tag.classList.remove("light");
    tag.classList.toggle("dark");
    icons.innerHTML = "light_mode";
    localStorage.setItem("theme", "dark");
  } else {
    tag.classList.remove("dark");
    tag.classList.toggle("light");
    icons.innerHTML = "dark_mode";
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
} else {
  icons.innerHTML = "dark_mode";
}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const currentPath = window.location.pathname;

document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (currentPath === linkPath) {
    link.classList.add(
      "border-b-2",
      "border-blue-500",
      "text-blue-700",
      "font-semibold"
    );
  } else {
    link.classList.add(
      "border-b-2",
      "border-transparent",
      "hover:text-blue-500",
      "hover:border-blue-400"
    );
  }
});

function toggleDropdown(e) {
  e.preventDefault();
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden");
}
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    200: {
      slidesPerView: 1,
    },
  },
});
console.log("working");
