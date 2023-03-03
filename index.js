const barEl = document.querySelector(".fa-bars");
const sidebarEl = document.querySelector(".sidebar");
const crossEl = document.querySelector(".fa-rectangle-xmark");

barEl.addEventListener("click", () => {
  sidebarEl.classList.toggle("show-sidebar");
});

crossEl.addEventListener("click", () => {
  sidebarEl.classList.remove("show-sidebar");
});
