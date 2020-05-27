Vue.component('education-content', {
    data: function () {
        return {
            schools: Data.education
        }
    },
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