(function () {
    // constants

    const buttonText = {'show': 'show all jobs', 'hide': 'hide irrelevant jobs'};

    // components

    Vue.component('experience-content', {
        data: function () {
            return {
                allCompanies: Data.experience,
                relevantCompanies: Data.experience.filter(company => company.relevant),
                showAll: false
            }
        },
        computed: {
            buttonText: function () {
                return this.showAll ? buttonText.hide : buttonText.show;
            },
            companiesToShow: function () {
                return this.showAll ? this.allCompanies : this.relevantCompanies;
            }
        },
        methods: {
            toggleShowAll: function () {
                this.showAll = !this.showAll;
            }
        },
        template: `
            <div class="experience-content">
                <transition-group name="companies" tag="ul">
                    <company-display v-for="company in companiesToShow"
                                     v-bind:company="company"
                                     v-bind:key="company.code"
                                     v-bind:showAll="showAll"></company-display>
                </transition-group>
                <div class="btn" @click="toggleShowAll">{{buttonText}}</div>
            </div>`
    });

    Vue.component('company-display', {
        props: ['company', 'showAll'],
        methods: {
            dateSpanHTML: Util.formatDateSpanHTML
        },
        template: `
            <li class="company-display">
                <hr>
                <div class="row company-headline">
                    <div class="col-12 col-md-6"><h5>{{company.name}}</h5></div>
                    <div class="col-12 col-md-6"><p>{{company.location}}</p></div>
                </div>
                <div v-for="position in company.positions" v-bind:key="position.title" class="position-details">
                    <div class="row position-headline">
                        <div class="col-12 col-md-6"><h5 class="title">{{position.title}}</h5></div>
                        <div class="col-12 col-md-6"><p v-html="dateSpanHTML(position)"></p></div>
                    </div>
                    <ul v-show="position.description.length !== 0" class="bullets">
                        <li v-for="bullet in position.description" v-bind:key="bullet">{{bullet}}</li>
                    </ul>
                </div>
            </li>`
    });
})();