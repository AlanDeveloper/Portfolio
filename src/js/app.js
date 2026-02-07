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
            <div class="project-card" data-aos="fade-up">
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

  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
});
