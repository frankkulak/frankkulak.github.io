const schoolData = [
    {
        code: 'nu',
        name: 'Northeastern University',
        location: 'Boston, MA',
        degree: 'B.S. in Computer Science and Linguistics, minor in Psychology',
        graduation: 'exp. May 2021',
        gpa: '3.78',
        honors: [
            "Dean's list",
            'Nomination for publication in <em>Northeastern University Working Papers in Linguistics</em> journal'
        ],
        subjects: [
            {
                name: 'computer science',
                courses: [
                    {
                        code: 'CS',
                        number: '4500',
                        title: 'Software Development'
                    },
                    {
                        code: 'CS',
                        number: '4400',
                        title: 'Programming Languages'
                    },
                    {
                        code: 'CS',
                        number: '4120',
                        title: 'Natural Language Processing'
                    },
                    {
                        code: 'CS',
                        number: '3800',
                        title: 'Theory of Computation'
                    },
                    {
                        code: 'CS',
                        number: '3500',
                        title: 'Object-Oriented Design'
                    },
                    {
                        code: 'CS',
                        number: '3000',
                        title: 'Algorithms & Data'
                    },
                    {
                        code: 'CS',
                        number: '2510',
                        title: 'Fundamentals of Computer Science II'
                    },
                    {
                        code: 'CS',
                        number: '2500',
                        title: 'Fundamentals of Computer Science I'
                    },
                    {
                        code: 'CS',
                        number: '1800',
                        title: 'Discrete Structures'
                    }
                ]
            },
            {
                name: 'linguistics',
                courses: [
                    {
                        code: 'LING',
                        number: '4654',
                        title: 'Seminar: Evolutionary Linguistics'
                    },
                    {
                        code: 'LING',
                        number: '3424',
                        title: 'Morphology'
                    },
                    {
                        code: 'LING',
                        number: '3422',
                        title: 'Phonology'
                    },
                    {
                        code: 'LING',
                        number: '3412',
                        title: 'Language & Culture'
                    },
                    {
                        code: 'LING',
                        number: '2350',
                        title: 'Linguistic Analysis'
                    },
                    {
                        code: 'LING',
                        number: '1150',
                        title: 'Introduction to Linguistics'
                    }
                ]
            },
            {
                name: 'psychology',
                courses: [
                    {
                        code: 'PSYC',
                        number: '3464',
                        title: 'Psychology of Language'
                    },
                    {
                        code: 'PSYC',
                        number: '3400',
                        title: 'Personality'
                    },
                    {
                        code: 'PSYC',
                        number: '2320',
                        title: 'Statistics for Psychological Research'
                    }
                ]
            },
            {
                name: 'other',
                courses: [
                    {
                        code: 'ENGW',
                        number: '3302',
                        title: 'Advanced Writing in the Technical Professions',
                        'ongoing': true
                    },
                    {
                        code: 'PHIL',
                        number: '1145',
                        title: 'Technology & Human Values'
                    },
                    {
                        code: 'ENGW',
                        number: '1111',
                        title: 'First Year Writing'
                    }
                ]
            },
        ]
    }
];

Vue.component('education-contents', {
    props: ['schools'],
    template: `<div><school-display v-for="school in schools" v-bind:school="school" v-bind:key="school.code"></school-display></div>`
});

Vue.component('school-display', {
    props: ['school'],
    data: function () {
      return {
          detailsShown: false,
          buttonText: 'show details'
      }
    },
    methods: {
        toggleDetails: function () {
            this.detailsShown = !this.detailsShown;
            this.buttonText = this.detailsShown ? 'hide details' : 'show details'
        },
        formatCourses: function (courses) {
            const formatCourse = ({title, code, number, ongoing}) => `${title} (${code} ${number})${ongoing ? '*' : ''}`;
            let output = [];
            courses.forEach(course => output.push(formatCourse(course)));
            return output.join(', ');
        }
    },
    template: `<div class="row school-preview">
<div class="col-12 col-md-10 school-header">
<h5>{{ school.name }}, <span class="location">{{ school.location }}</span></h5>
<p>{{ school.degree }} <span class="grad-date">({{ school.graduation }})</span></p>
</div>
<div class="col-md-2 btn-col">
<div class="btn" @click="toggleDetails">{{ buttonText }}</div>
</div>
<transition name="details">
<div v-show="detailsShown" class="details">
<p>GPA: {{ school.gpa }}/4.0</p>
<h6>honors</h6>
<p v-for="honor in school.honors" v-html="honor"></p>
<h6>courses</h6>
<table>
<tr v-for="subject in school.subjects">
<td class="category">
{{ subject.name }}
</td>
<td>
{{ formatCourses(subject.courses) }}
</td>
</tr>
</table>
<p>* = in progress</p>
</div>
</transition>
</div>`
});

const educationApp = new Vue({
    el: '#education-content',
    data: {
        schools: schoolData
    }
});