const sections = document.querySelectorAll(".section");

// Fonction pour vérifier si une section est visible à l'écran
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
    (window.innerHeight || document.documentElement.clientHeight) - 100
  );
};

// Fonction pour ajouter la classe 'visible' aux sections visibles
const revealSections = () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("visible");
    }
  });
};

// Événement au scroll
window.addEventListener("scroll", revealSections);

// Appel initial pour les sections déjà visibles
revealSections();
