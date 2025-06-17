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

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});

function initSliders() {
  const wrappers = document.querySelectorAll(".slider-wrapper");

  wrappers.forEach((wrapper) => {
    const slider = wrapper.querySelector(".slider");
    const slides = wrapper.querySelectorAll(".slide");
    const prev = wrapper.querySelector(".prev");
    const next = wrapper.querySelector(".next");
    let index = 0;

    function getSlidesPerView() {
      const width = window.innerWidth;
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      if (width >= 640) return 2;
      return 1;
    }

    function updateSlider() {
      const perView = getSlidesPerView();
      const slideWidth = slides[0].getBoundingClientRect().width + 16; // +gap
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    next.addEventListener("click", () => {
      const perView = getSlidesPerView();
      if (index < slides.length - perView) {
        index++;
        updateSlider();
      }
    });

    prev.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    });

    window.addEventListener("resize", () => {
      index = 0;
      updateSlider();
    });

    updateSlider();
  });
}

document.addEventListener("DOMContentLoaded", initSliders);

const modal = document.getElementById("modal");

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
  // tag.style.backgroundColor = "rgba(0, 0, 255, 0.6)";
}
function closeModal() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    closeModal();
  }
});
