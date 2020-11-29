$('.link a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});