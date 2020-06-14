(function () {
    Vue.component('projects-content', {
        data: function () {
            return {
                projects: Data.projects,
                selected: Data.projects[0].title
            }
        },
        methods: {
            buttonTitle: function (category) {
                return `view ${category} projects`;
            },
            handleClick: function (category) {
                this.selected = category;
            }
        },
        template: `
            <div class="projects-content">
                <div class="row justify-content-center project-buttons">
                    <span class="btn"
                          v-for="category in projects"
                          v-bind:key="category.title"
                          :class="selected === category.title && 'selected'"
                          v-bind:title="buttonTitle(category.title)"
                          @click="handleClick(category.title)">{{category.title}}</span>
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
                            <td colspan="2"><p v-html="project.description"></p></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="row">
                                    <a v-for="link in project.links"
                                       v-bind:href="link.url"
                                       target="_blank"
                                       v-bind:title="link.text"
                                       v-html="link.icon"></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>`
    });
})();