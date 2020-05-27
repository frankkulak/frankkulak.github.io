Vue.component('section-header', {
    props: ['title'],
    template: `<div class="section-header"><h1>{{ title }}</h1><hr></div>`
});

Vue.component('theme-toggle', {
    template: `<div class="theme-selector"><input type="checkbox" id="theme-switch" name="theme"/><label for="theme-switch"></label></div>`
});