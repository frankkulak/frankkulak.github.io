(function () {
    Vue.component('section-header', {
        props: ['title'],
        template: `
            <div class="section-header">
                <h1>{{title}}</h1>
                <hr>
            </div>`
    });

    Vue.component('section-content', {
        props: ['content'],
        template: `
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8">
                        <component :is="content"></component>
                    </div>
                </div>
            </div>`
    });
})();