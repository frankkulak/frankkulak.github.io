export default (function () {
    const docElement = document.documentElement;
    const themeKey = 'fk-theme';
    const themes = {light: 'light', dark: 'dark'};
    const defaultTheme = themes.light;
    let cachedTheme = undefined;
    let themeFrozen = false;

    const transition = () => {
        themeFrozen = true;
        docElement.classList.add('theme-transition');
        window.setTimeout(() => {
            docElement.classList.remove('theme-transition');
            themeFrozen = false;
        }, 1000); // make sure you keep this the same as css
    };

    function getTheme() {
        if (cachedTheme !== undefined) return cachedTheme;
        cachedTheme = localStorage.getItem(themeKey);
        if (cachedTheme == null) cachedTheme = defaultTheme;
        return cachedTheme;
    }

    function setTheme(theme, initial = false) {
        if (!initial) transition();
        docElement.setAttribute('data-theme', theme);
        localStorage.setItem(themeKey, theme);
        cachedTheme = theme;
    }

    function toggleTheme() {
        if (themeFrozen) return;
        cachedTheme = cachedTheme === themes.light ? themes.dark : themes.light;
        setTheme(cachedTheme);
    }

    setTheme(getTheme(), true); // initializes theme

    return {
        get: getTheme,
        set: setTheme,
        toggle: toggleTheme
    }
})();