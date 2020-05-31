(function () {
    // constants

    const showAllButtonText = {'show': 'show all jobs', 'hide': 'hide irrelevant jobs'};

    // components

    Vue.component('experience-content', {
        data: function () {
            return {
                companies: Data.experience,
                showAll: false,
                buttonText: showAllButtonText.show
            }
        },
        methods: {
            toggleShowAll: function () {
                this.showAll = !this.showAll;
                this.buttonText = this.showAll ? showAllButtonText.hide : showAllButtonText.show;
            }
        },
        template: `
            <div class="experience-content">
                <company-display v-for="company in companies"
                                 v-bind:company="company"
                                 v-bind:key="company.code"
                                 v-bind:showAll="showAll"></company-display>
                <div class="btn" @click="toggleShowAll">{{buttonText}}</div>
            </div>`
    });

    Vue.component('company-display', {
        props: ['company', 'showAll'],
        methods: {
            dateSpanHTML: Util.formatDateSpanHTML,
            show: function () {
                return this.$props.showAll || this.$props.company.relevant;
            }
        },
        template: `
            <div v-show="show()" class="company-display">
                <hr>
                <div class="row">
                    <div class="col-12 col-md-6"><h5>{{company.name}}</h5></div>
                    <div class="col-12 col-md-6"><p>{{company.location}}</p></div>
                </div>
                <div v-for="position in company.positions" v-bind:key="position.title">
                    <div class="row">
                        <div class="col-12 col-md-6"><h5 class="title">{{position.title}}</h5></div>
                        <div class="col-12 col-md-6"><p v-html="dateSpanHTML(position)"></p></div>
                    </div>
                    <ul v-show="position.description.length !== 0">
                        <li v-for="bullet in position.description" v-bind:key="bullet">{{bullet}}</li>
                    </ul>
                </div>
            </div>`
    });
})();