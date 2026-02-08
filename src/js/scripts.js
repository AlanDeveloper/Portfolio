function renderProjects() {
  const projectGrid = document.querySelector(".project-grid");
  projectGrid.innerHTML = "";

  projects.forEach((project) => {
    const translation = currentTranslations.projects?.[project.id] || {
      title: "",
      description: "",
    };

    const projectCard = `
      <div class="project-card" data-aos="fade-up" data-link="${project.live}">
        <div class="project-image">
          <img src="${project.image}" alt="${translation.title}">
        </div>
        <h3 class="project-title">${translation.title}</h3>
        <p class="project-description">${translation.description}</p>
        <div class="project-links">
          <a href="${project.github}" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="${project.live}" target="_blank">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    `;
    projectGrid.innerHTML += projectCard;
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      window.open(card.dataset.link, "_blank");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      const isOpen = details.style.maxHeight;
      const currentLang = localStorage.getItem("preferredLang") || "en";

      if (isOpen) {
        details.style.maxHeight = null;
        btn.textContent = currentLang === "en" ? "Read more" : "Ler mais";
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
        btn.textContent = currentLang === "en" ? "Read less" : "Ler menos";
      }
    });
  });
});
