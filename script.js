const links = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname;

links.forEach((link) => {
  if (link.href.includes(currentPath.split("/").pop())) {
    link.classList.add("active");
  }
});
