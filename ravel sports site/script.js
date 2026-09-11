// Menu mobile
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("primary-nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});