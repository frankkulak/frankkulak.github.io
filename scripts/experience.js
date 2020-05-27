// Returns a formatted string for the span between two dates (e.g. "Jan. 2019 - Dec. 2019").
const formatDateSpanAsHTML = (start, end) => {
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    const [startMonth, startYear] = [months[start.getMonth()], start.getFullYear()];
    const [endMonth, endYear] = [months[end.getMonth()], end.getFullYear()];
    if (startYear === endYear) {
        return `<span class="nowrap">${startMonth} – ${endMonth}</span> ${endYear}`;
    } else {
        return `${startMonth} ${startYear} <span class="nowrap">– ${endMonth} ${endYear}</span>`;
    }
};

const showAllButtonText = {'show': 'show all jobs', 'hide': 'hide irrelevant jobs'};
Vue.component('experience-content', {
    data: function () {
        return {
            jobs: Data.experience,
            showAll: false,
            buttonText: showAllButtonText.show
        }
    },
    methods: {
        toggleRelevance: function () {
            this.showAll = !this.showAll;
            this.buttonText = this.showAll ? showAllButtonText.hide : showAllButtonText.show;
            console.log('toggle pressed');
        }
    },
    template: `
        <div>
            <company-display v-for="job in jobs" v-bind:job="job" v-bind:key="job.code"
                             v-bind:showAll="showAll"></company-display>
            <div class="btn" @click="toggleRelevance">{{ buttonText }}</div>
        </div>`
});

Vue.component('company-display', {
    props: ['job', 'showAll'],
    methods: {
        dateSpanHTML: function ({start, end}) {
            return formatDateSpanAsHTML(start, end);
        },
        show: function () {
            return this.$props.showAll || this.$props.job.relevant;
        }
    },
    template: `
        <div v-show="show()" class="company-display">
            <table>
                <tr>
                    <td class="company"><h5>{{ job.company }}</h5></td>
                    <td class="location"><h5>{{ job.location }}</h5></td>
                </tr>
            </table>
            <table v-for="position in job.positions">
                <tr>
                    <td class="title"><p>{{ position.title }}</p></td>
                    <td class="date"><p v-html="dateSpanHTML(position)"></p></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <ul>
                            <li v-for="bullet in position.description">
                                {{ bullet }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>`
});