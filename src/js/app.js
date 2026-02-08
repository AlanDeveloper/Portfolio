document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Site de portfólio pessoal construído com HTML, CSS e JavaScript.",
      image: "src/assets/img/projects/portfolio.png",
      github: "https://github.com/AlanDeveloper/Portfolio",
      live: "https://alandeveloper.com.br/",
    },
    {
      title: "Kicks",
      description:
        "Loja virtual de sneakers com carrinho de compras, gerenciamento de estado com Pinia e interface responsiva. Desenvolvido com Vue 3, TypeScript e Tailwind CSS.",
      image: "src/assets/img/projects/kicks.png",
      github: "https://github.com/AlanDeveloper/kicks",
      live: "https://kicks.alandeveloper.com.br/",
    },
  ];

  const projectGrid = document.querySelector(".project-grid");

  projects.forEach((project) => {
    const projectCard = `
            <div class="project-card" data-aos="fade-up" data-link="${project.live}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
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
      const link = card.dataset.link;
      window.open(link, "_blank");
    });
  });

  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      const isOpen = details.style.maxHeight;

      const isEnglish = document.getElementById("body-en");

      if (isOpen) {
        details.style.maxHeight = null;
        btn.textContent = isEnglish ? "Read more" : "Ler mais";
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
        btn.textContent = isEnglish ? "Read less" : "Ler menos";
      }
    });
  });
});
