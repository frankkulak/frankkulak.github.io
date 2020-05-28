(function () {
    Vue.component('projects-content', {
        data: function () {
            return {
                projects: Data.projects,
                selected: Data.projects[0].title
            }
        },
        methods: {
            handleClick: function (category) {
                this.selected = category;
            }
        },
        template: `
            <div class="projects-content">
                <div class="row justify-content-center project-buttons">
                    <div class="btn"
                         v-for="category in projects"
                         v-bind:key="category.title"
                         :class="selected === category.title && 'selected'"
                         @click="handleClick(category.title)">{{category.title}}</div>
                </div>
                <div class="project-cards row justify-content-center"
                     v-for="category in projects"
                     v-bind:key="category.title"
                     v-show="selected === category.title">
                    <div class="col-12 col-md-6"
                         v-for="project in category.projects"
                         v-bind:key="project.name">
                        <project-card v-bind:project="project"></project-card>
                    </div>
                </div>
            </div>`
    });

    Vue.component('project-card', {
        props: ['project'],
        methods: {
            dateSpanHTML: function () {
                return Util.formatDateSpanHTML(this.project);
            }
        },
        template: `
            <div class="project-card-outline">
                <div class="project-card text-left">
                    <div class="d-flex flex-row fill-width">
                        <h6 class="text-left text-nowrap mr-2">{{project.name}}</h6>
                        <h6 class="timespan text-right fill-width" v-html="dateSpanHTML()"></h6>
                    </div>
                    <p>{{project.description}}</p>
                    <div v-for="link in project.links" class="d-flex flex-row fill-width justify-content-end">
                        <a class="btn text-nowrap" v-bind:href="link.url" target="_blank">{{link.text}}</a>
                    </div>
                </div>
            </div>`
    });
})();