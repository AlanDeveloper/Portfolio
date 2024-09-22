const links = document.querySelectorAll('.technologies a');
let currentIndex = 0;

function animateLinks() {
    links.forEach(link => link.classList.remove('hovered'));

    links[currentIndex].classList.add('hovered');

    currentIndex = (currentIndex + 1) % links.length;
}

animateLinks();
setInterval(animateLinks, 2000);