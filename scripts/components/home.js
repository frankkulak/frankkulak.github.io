(function () {
    Vue.component('home-content', {
        methods: {
            handleClick: function (e) {
                Animate.scroll(e, '#about');
            }
        },
        template: `
            <div class="home-content">
                <div class="decals">
                    <img class="top-left" src="./images/home-decals/top-left.svg" alt="decal">
                    <img class="top-right" src="./images/home-decals/top-right.svg" alt="decal">
                    <img class="bottom-left" src="./images/home-decals/bottom-left.svg" alt="decal">
                </div>
                <div class="home-text">
                    <h1>Hi, I'm <strong>Frank Kulak</strong>.<br>I'm a software developer.</h1>
                    <div class="btn" @click="handleClick($event)">learn more <i class="fas fa-arrow-down"></i></div>
                </div>
            </div>`
    });
})();