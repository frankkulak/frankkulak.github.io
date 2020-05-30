(function () {
    const navbar = $("nav");
    const collapseElement = $(".navbar-collapse");
    const offset = navbar.height();
    const animationDuration = 500;
    const collapseDuration = 150; // from _navigation.scss
    const maxSmallScreenSize = 767; // from bootstrap
    const delay = (func, time) => setTimeout(func, time);

    navbar.find("a").click(function (e) {
        const isSmallScreen = $(window).width() <= maxSmallScreenSize;

        e.preventDefault();
        const section = $(this).attr("href");
        const scroll = () => {
            $("html, body").animate({
                scrollTop: $(section).offset().top - offset
            }, animationDuration);
        };

        if (isSmallScreen) {
            collapseElement.collapse('hide');
            delay(scroll, collapseDuration);
        } else {
            scroll();
        }
    });
})();