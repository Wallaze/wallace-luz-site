// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.setAttribute("aria-expanded", "false");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Fecha menu ao clicar em um link
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// Fecha menu ao clicar fora
document.addEventListener("click", (event) => {
  if (
    nav.classList.contains("open") &&
    !nav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

// SERVIÇOS (ACCORDION)
const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach(item => {
  const button = item.querySelector(".service-title");
  const content = item.querySelector(".service-desc");

  button.setAttribute("aria-expanded", "false");
  content.setAttribute("aria-hidden", "true");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    serviceItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".service-title")
        .setAttribute("aria-expanded", "false");
      i.querySelector(".service-desc")
        .setAttribute("aria-hidden", "true");
    });

    if (!isActive) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      content.setAttribute("aria-hidden", "false");
    }
  });
});

// UX – TECLADO
document.addEventListener("keydown", event => {
  const isEnter = event.key === "Enter";
  const isSpace = event.key === " ";

  if (
    (isEnter || isSpace) &&
    document.activeElement.classList.contains("service-title")
  ) {
    event.preventDefault();
    document.activeElement.click();
  }
});
