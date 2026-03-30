document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const icon = document.querySelector(".theme-icon");

  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    root.setAttribute("data-theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});




document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero-visual");

  if (!hero) return;

  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  hero.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
});