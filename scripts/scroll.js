const navbar = $("nav");
navbar.find("a").click(function (e) {
    e.preventDefault();
    const section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - navbar.height()
    });
});