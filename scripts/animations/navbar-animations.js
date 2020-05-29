(function () {
    const navbar = $("nav");
    const offset = navbar.height();
    const animationDuration = 300;

    // smoothly scroll to section
    navbar.find("a").click(function (e) {
        e.preventDefault();
        const section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - offset
        }, animationDuration);
    });

    // close collapse menu after selecting item
    $('.navbar-collapse a').click(function () {
        setTimeout(function () {
            $(".navbar-collapse").collapse('hide');
        }, animationDuration);
    });
})();