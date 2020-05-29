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
                <div class="project-card">
                    <table>
                        <tr>
                            <td class="title"><h6>{{project.name}}</h6></td>
                            <td class="timespan"><h6 v-html="dateSpanHTML()"></h6></td>
                        </tr>
                        <tr>
                            <td colspan="2"><p>{{project.description}}</p></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="row">
                                    <a class="btn"
                                       v-for="link in project.links"
                                       v-bind:href="link.url"
                                       target="_blank">{{link.text}}</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>`
    });
})();