(function () {
    Vue.component('home-content', {
        methods: {
            handleClick: function () {
                Animate.scroll('#about');
            }
        },
        template: `
            <div>
                <h1>Hi, I'm <strong>Frank Kulak</strong>.<br>I'm a software developer.</h1>
                <div class="btn" @click="handleClick">learn more <i class="fas fa-arrow-down"></i></div>
            </div>`
    });
})();