const sections = document.querySelectorAll(".section");
const fadeItems = document.querySelectorAll(".skills div, .timeline-item");

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
    (window.innerHeight || document.documentElement.clientHeight) - 100
  );
};

const revealSections = () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("visible");
    }
  });

  // Animation cascade pour skills & timeline
  fadeItems.forEach((item, index) => {
    if (isInViewport(item)) {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 150); // délai progressif
    }
  });
};

window.addEventListener("scroll", revealSections);
revealSections();
