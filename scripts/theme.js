(function () {
    // Key to use for reading/writing theme preference to local storage.
    const themeKey = 'fk-theme';

    // Sets the theme.
    const setTheme = theme => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(themeKey, theme);
    };

    // Sets the theme when the check box is toggled.
    const themeCheckbox = $('input[name=theme]');
    themeCheckbox.change(function () {
        if ($(this).is(':checked')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // Check stored theme and load if it exists.
    const storedTheme = localStorage.getItem(themeKey);
    if (storedTheme !== null) {
        themeCheckbox.prop("checked", storedTheme === 'dark');
        setTheme(storedTheme);
    }
})();