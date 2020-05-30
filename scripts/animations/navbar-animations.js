(function () {
    const navbar = $("nav");
    const collapseElement = $(".navbar-collapse");
    const collapseDuration = 150; // from _navigation.scss
    const maxSmallScreenSize = 767; // from bootstrap
    const delay = (func, time) => setTimeout(func, time);

    navbar.find("a").click(function (e) {
        const isSmallScreen = $(window).width() <= maxSmallScreenSize;

        e.preventDefault();
        const section = $(this).attr("href");
        if (isSmallScreen) {
            collapseElement.collapse('hide');
            setTimeout(() => Animate.scroll(section), collapseDuration);
            delay(scroll, collapseDuration);
        } else {
            Animate.scroll(section);
        }
    });
})();