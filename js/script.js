function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('active');
}

function scrollToSection(id) {
  // Har doim scroll bo‘lishi uchun setTimeout ichida ishlatamiz
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // URL hashni o‘chirib tashlaymiz
      history.replaceState(null, null, " ");
    }
  }, 50); // 50ms kechikish bilan ishlaydi
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    // Sahifa yuklangach 50ms ichida hashni olib tashlash
    setTimeout(() => history.replaceState(null, null, " "), 50);
  }
});

