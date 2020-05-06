// Automatically scrolls to the top of a card when clicked.
$('.card').on('shown.bs.collapse', function () {
    let card = $(this).closest('.card');
    let navbarOffset = $('#navbar').height() * 1.5;
    console.log(navbarOffset);
    $('html,body').animate({
        scrollTop: card.offset().top - navbarOffset
    }, 500);
});