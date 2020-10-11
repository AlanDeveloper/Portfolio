let div;
if (window.innerWidth <= 1000) {
    div = document.querySelector('.row-cols-md-3');
    div.classList.remove('row-cols-md-3');
    div.classList.add('row-cols-md-2');

} else if (document.querySelector(".row-cols-md-2")) {
    div = document.querySelector('.row-cols-md-2');
    div.classList.remove('row-cols-md-2');
    div.classList.add('row-cols-md-3');
}