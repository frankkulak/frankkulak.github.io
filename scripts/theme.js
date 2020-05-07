// Key to use for reading/writing theme preference to local storage.
const themeKey = 'fk-theme';

// Sets the theme.
const setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(themeKey, theme);
};

// const addTapEffect = id => {
//     const themeSwitchLabel = $(`#${id}`);
//     themeSwitchLabel.on('touchstart', function() {
//         console.log('touchstart');
//         themeSwitchLabel.addClass('click-effect');
//         setTimeout(() => {
//             console.log('timeout over');
//             themeSwitchLabel.removeClass('click-effect');
//         }, 50);
//     });
// };
//
// addTapEffect('theme-lbl');

// Sets the theme when the check box is toggled.
const themeCheckbox = $('input[name=theme]');
themeCheckbox.change(function() {
    if($(this).is(':checked')) {
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