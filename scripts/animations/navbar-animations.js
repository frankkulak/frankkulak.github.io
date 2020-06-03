(function () {
    // fixme try to move all this logic into animate.js
    const navbar = $("nav");
    const collapseElement = $(".navbar-collapse");
    const collapseDuration = 150; // from _navigation.scss
    const maxSmallScreenSize = 767; // from bootstrap

    navbar.find("a").click(function (e) {
        e.preventDefault();
        const isSmallScreen = $(window).width() <= maxSmallScreenSize;
        const section = $(this).attr("href");
        if (isSmallScreen) {
            collapseElement.collapse('hide');
            setTimeout(() => Animate.scroll(e, section), collapseDuration);
        } else {
            Animate.scroll(e, section);
        }
    });
})();