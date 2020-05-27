Vue.component('skills-content', {
    data: function () {
        return {
            skills: Data.skills
        }
    },
    template: `
        <div class="skills-content">
            <skills-category v-for="category in skills"
                             v-bind:category="category"
                             v-bind:key="category.title"></skills-category>
        </div>`
});

Vue.component('skills-category', {
    props: ['category'],
    template: `
        <div class="category-view">
            <h5 class="category-title">{{ category.title }}</h5>
            <skill-display v-for="skill in category.skills"
                           v-bind:skill="skill"
                           v-bind:key="skill.title"></skill-display>
        </div>`
});

Vue.component('skill-display', {
    props: ['skill'],
    methods: {
        ratingClass: function (n) {
            return n <= this.$props.skill.rating ? 'full' : '';
        }
    },
    template: `
        <table>
            <tr>
                <td>
                    <h5>{{skill.title}}</h5>
                </td>
                <td class="rating">
                    <div class="row skill-bar mx-auto">
                        <div v-for="n in 5"
                             class="skill-cell"
                             :class="ratingClass(n)"
                             v-bind:key="n"></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <p>{{skill.description}}</p>
                </td>
            </tr>
        </table>`
});