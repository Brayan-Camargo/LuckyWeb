// Efecto de texto rotativo - SOLO se ejecuta en la página principal
const rotatingTextElement = document.getElementById("rotating_text");

if (rotatingTextElement) {
    const words = ["Increíble", "Profesional", "Moderna", "Única"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let currentLetters = "";

    function type() {
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        currentWord = words[wordIndex];
        currentLetters = currentWord.slice(0, ++letterIndex);

        rotatingTextElement.textContent = currentLetters;

        if (currentLetters.length === currentWord.length) {
            setTimeout(erase, 1500);
        } else {
            setTimeout(type, 100);
        }
    }

    function erase() {
        currentLetters = currentWord.slice(0, --letterIndex);
        rotatingTextElement.textContent = currentLetters;

        if (currentLetters.length === 0) {
            wordIndex++;
            setTimeout(type, 500);
        } else {
            setTimeout(erase, 50);
        }
    }

  type();
}

//Efecto de menu scroll
window.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    const hero = document.querySelector(".hero");

    // Calcula el punto en que termina el hero
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY >= hero.offsetHeight - 50) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});

//Menu Hamborguesa
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu_toggle");
  const menuLinks = document.querySelector(".menu_links");
  const links = document.querySelectorAll(".menu_links a");

  // Abrir / cerrar al click en botón
  toggleBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
  });

  // Cerrar al dar click en un enlace
  links.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.classList.remove("active");
    });
  });
});