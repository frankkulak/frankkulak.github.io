Vue.component('section-header', {
    props: ['title'],
    template: `<div class="section-header"><h1>{{ title }}</h1><hr></div>`
});