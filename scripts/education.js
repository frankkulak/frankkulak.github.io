(function () {
    // constants

    const showDetailsButtonText = {show: 'show details', hide: 'hide details'};

    // components

    Vue.component('education-content', {
        data: function () {
            return {
                schools: Data.education
            }
        },
        template: `
            <div class="education-content">
                <school-display v-for="school in schools"
                                v-bind:school="school"
                                v-bind:key="school.code"></school-display>
            </div>`
    });

    Vue.component('school-display', {
        props: ['school'],
        data: function () {
            return {
                detailsShown: false,
                buttonText: showDetailsButtonText.show,
                courseInProgress: false
            }
        },
        methods: {
            toggleDetails: function () {
                this.detailsShown = !this.detailsShown;
                this.buttonText = this.detailsShown ? showDetailsButtonText.hide : showDetailsButtonText.show
            },
            formatCourse: function ({title, code, number, ongoing}) {
                if (ongoing) this.courseInProgress = true;
                return `${title} (${code} ${number})${ongoing ? '*' : ''}`
            }
        },
        template: `
            <div class="row justify-content-center school-display">
                <div class="col-12 col-md-10 school-header">
                    <h5>{{school.name}}, <span class="location">{{school.location}}</span></h5>
                    <p>{{school.degree}} <span class="grad-date">({{school.graduation}})</span></p>
                </div>
                <div class="col-md-2 btn-col">
                    <div class="btn" @click="toggleDetails">{{ buttonText }}</div>
                </div>
                <transition name="details">
                    <div v-show="detailsShown" class="details">
                        <table>
                            <tr class="title-row">
                                <td>
                                    <h6>honors</h6>
                                </td>
                                <td class="gpa">
                                    GPA: {{ school.gpa }}/4.0
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <p v-for="honor in school.honors" v-bind:key="honor" v-html="honor"></p>
                                </td>
                            </tr>
                            <tr class="title-row">
                                <td>
                                    <h6>courses</h6>
                                </td>
                            </tr>
                            <tr v-for="subject in school.subjects" v-bind:key="subject.name">
                                <td class="category">
                                    {{ subject.name }}
                                </td>
                                <td>
                                    <ul class="course-list">
                                        <li v-for="course in subject.courses"
                                            v-bind:key="course.title">{{formatCourse(course)}}</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                        <p v-if="courseInProgress">* = in progress</p>
                    </div>
                </transition>
            </div>`
    });
})();