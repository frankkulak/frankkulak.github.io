const Animate = (function () {
    const navbar = $("nav");
    const offset = navbar.height();
    const animationDuration = 500;

    function scroll(e, id) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(id).offset().top - offset
        }, animationDuration);
    }

    return {
        scroll: scroll
    }
})();