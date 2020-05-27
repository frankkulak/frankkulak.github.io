const month = index => index - 1; // just to make dates more readable / reduce error
const experienceData = [
    {
        code: 'tjx',
        company: 'The TJX Companies',
        location: 'Framingham, MA',
        relevant: true,
        positions: [
            {
                title: 'IT Engineer Co-op',
                description: [
                    'Developed front end for T.J.Maxx and HomeGoods mobile applications using Xamarin.Forms and HTML, CSS, and JavaScript',
                    'Collaborated with other developers using Agile to deliver critical features and bug fixes',
                    'Utilized release-branching strategy to manage project versions with Git, GitHub, and SourceTree',
                    'Maintained existing codebase built with MVVM architecture'
                ],
                start: new Date(2019, month(7)), // Jul 2019
                end: new Date(2019, month(12)), // Dec 2019
                seasonal: false
            }
        ]
    },
    {
        code: 'nu',
        company: 'Northeastern University',
        location: 'Boston, MA',
        relevant: false,
        positions: [
            {
                title: 'Peer Tutor',
                description: [
                    'placeholder',
                    'placeholder'
                    // todo
                ],
                start: new Date(2019, month(1)), // Jan 2019
                end: new Date(), // Present
                seasonal: true
            },
            {
                title: 'Office Assistant',
                description: [
                    'placeholder',
                    'placeholder'
                    // todo
                ],
                start: new Date(2017, month(9)), // Sep 2017
                end: new Date(2020, month(3)), // Mar 2020
                seasonal: true
            }
        ]
    },
    {
        code: 'sherwood',
        company: 'Sherwood Cleaners',
        location: 'Plainville, CT',
        relevant: false,
        positions: [
            {
                title: 'Cashier',
                description: [
                    'placeholder',
                    'placeholder'
                    // todo
                ],
                start: new Date(2018, month(6)), // Jun 2018
                end: new Date(2019, month(7)), // Jul 2019
                seasonal: true
            }
        ]
    },
    {
        code: 'barnes',
        company: 'Associate Spring',
        location: 'Bristol, CT',
        relevant: false,
        positions: [
            {
                title: 'Maintenance Worker',
                description: [
                    'placeholder',
                    'placeholder'
                    // todo
                ],
                start: new Date(2017, month(6)), // Jun 2017
                end: new Date(2017, month(8)), // Aug 2017
                seasonal: false
            }
        ]
    },
    {
        code: 'mah',
        company: 'Mobile Apps for Hartford',
        location: 'Hartford, CT',
        relevant: true,
        positions: [
            {
                title: 'Intern',
                description: [
                    'Collaborated with other interns to develop Android application for CREC school system using MIT App Inventor 2',
                    'Met with client from CREC schools on weekly basis to set expectations and ensure high quality of application',
                    'Published mobile application on the Google Play store',
                    'Attended weekly presentations on topics such as software development, cyber security, and robotics'
                ],
                start: new Date(2016, month(7)), // Jul 2016
                end: new Date(2016, month(8)), // Aug 2016
                seasonal: false
            }
        ]
    },
];

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
Vue.component('experience-contents', {
    props: ['jobs'],
    data: function () {
        return {
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
    template: `<div>
<company-display v-for="job in jobs" v-bind:job="job" v-bind:key="job.code" v-bind:showAll="showAll"></company-display>
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
    template: `<div v-show="show()" class="company-display">
<table><tr><td class="company"><h5>{{ job.company }}</h5></td><td class="location"><h5>{{ job.location }}</h5></td></tr></table>
<table v-for="position in job.positions">
<tr><td class="title"><p>{{ position.title }}</p></td><td class="date"><p v-html="dateSpanHTML(position)"></p></td></tr>
<tr><td colspan="2">
<ul>
<li v-for="bullet in position.description">
{{ bullet }}
</li>
</ul>
</td></tr>
</table>
</div>`
});

const experienceApp = new Vue({
    el: '#experience-content',
    data: {
        jobs: experienceData
    }
});