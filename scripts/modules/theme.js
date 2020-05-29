const Theme = (function () {
    const themeKey = 'fk-theme';
    const themes = {light: 'light', dark: 'dark'};
    const defaultTheme = themes.light;
    let cachedTheme = undefined;

    function getTheme() {
        if (cachedTheme !== undefined) return cachedTheme;
        cachedTheme = localStorage.getItem(themeKey);
        if (cachedTheme == null) cachedTheme = defaultTheme;
        return cachedTheme;
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(themeKey, theme);
        cachedTheme = theme;
    }

    function toggleTheme() {
        cachedTheme = cachedTheme === themes.light ? themes.dark : themes.light;
        setTheme(cachedTheme);
    }

    setTheme(getTheme()); // initializes theme

    return {
        get: getTheme,
        set: setTheme,
        toggle: toggleTheme
    }
})();