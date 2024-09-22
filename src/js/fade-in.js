document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
        element.classList.add('fade-in');
    });
});