(function () {
    const ratings = [
        {
            label: 'novice',
            description: "I could probably make a 'Hello World' program with this."
        },
        {
            label: 'familiar',
            description: "I could write a program with this, but may need to Google frequently."
        },
        {
            label: 'comfortable',
            description: "I could easily program with this, but have little to no formal experience with it."
        },
        {
            label: 'proficient',
            description: "I could easily program with this, and have used it extensively at work or school."
        },
        {
            label: 'expert',
            description: "I've been using this for so long, it feels like second nature at this point."
        }
    ];

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
            },
            ratingTitle: function (n) {
                const title = ratings[n - 1];
                return `${title.label}: ${title.description}`
            }
        },
        template: `
            <table>
                <tr>
                    <td>
                        <h5>{{skill.title}}</h5>
                    </td>
                    <td class="rating">
                        <span class="row skill-bar mx-auto"
                              v-bind:title="ratingTitle(skill.rating)">
                            <span v-for="n in 5"
                                  class="skill-cell"
                                  :class="ratingClass(n)"
                                  v-bind:key="n"></span>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>{{skill.description}}</p>
                    </td>
                </tr>
            </table>`
    });
})();