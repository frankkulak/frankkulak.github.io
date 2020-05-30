(function () {
    Vue.component('section-header', {
        props: ['title', 'icon'],
        methods: {
          header: function () {
              const {title, icon} = this.$props;
              return icon === undefined ? title : `${title} <i class="${icon}"></i>`;
          }
        },
        template: `
            <div class="section-header">
                <h1 v-html="header()"></h1>
                <hr>
            </div>`
    });
})();