document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website built with HTML, CSS and JavaScript.',
            image: 'src/assets/img/projects/portfolio.jpg',
            github: 'https://github.com/AlanDeveloper/Portfolio',
            live: 'https://alandeveloper.github.io/Portfolio'
        },
    ];

    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
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
        offset: 100
    });
});