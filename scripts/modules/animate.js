const Animate = (function () {
    const navbar = $("nav");
    const offset = navbar.height();
    const animationDuration = 500;

    function scroll(id) {
        $("html, body").animate({
            scrollTop: $(id).offset().top - offset
        }, animationDuration);
    }

    return {
        scroll: scroll
    }
})();