<template>
    <b-row align-h="center" class="school-display">
        <b-col cols="12" md="9" lg="7" class="text-left">
            <h4>{{ school.name }}, <span class="text-nowrap font-weight-normal">{{ school.location }}</span></h4>
            <p>{{ school.degree }} <span class="text-nowrap">({{ school.graduation }})</span></p>
        </b-col>
        <b-col cols="1" class="my-auto btn-col">
            <div class="btn" @click="toggleDetails"><i :class="buttonIconClass"></i></div>
        </b-col>
        <transition name="details">
            <b-col cols="12" md="10" lg="8" v-show="detailsShown" class="details">
                <mark>GPA: {{ school.gpa }}/4.0</mark>
                <div class="honors">
                    <h4>honors</h4>
                    <p v-for="(honor, index) in school.honors" :key="`${school.id}:${index}`" v-html="honor"></p>
                </div>
                <div class="courses">
                    <h4>courses</h4>
                    <div v-for="subject in school.subjects" :key="subject.name" class="subject">
                        <h5>{{ subject.name }}</h5>
                        <p v-html="formatCourses(subject)"></p>
                    </div>
                    <p v-if="courseInProgress">* = in progress</p>
                </div>
            </b-col>
        </transition>
    </b-row>
</template>

<script>
    const buttonIconClasses = {show: 'fas fa-chevron-circle-down', hide: 'fas fa-chevron-circle-up'};

    export default {
        name: "SchoolDisplay",
        props: {
            school: Object
        },
        data: function () {
            return {
                detailsShown: false,
                buttonIconClass: buttonIconClasses.show,
                courseInProgress: false
            }
        },
        methods: {
            toggleDetails: function () {
                this.detailsShown = !this.detailsShown;
                this.buttonIconClass = buttonIconClasses[this.detailsShown ? 'hide' : 'show'];
            },
            formatCourses: function ({courses}) {
                return courses.map(({title, code, number, ongoing}) => {
                    if (ongoing) this.courseInProgress = true;
                    return `${title} (${code} ${number})${ongoing ? '*' : ''}`;
                }).join(", ");
            }
        },
    }
</script>

<style lang="scss">
    .school-display {
        @include mb-abl($padding-lg);

        @media only screen and (max-width: 768px) {
            .btn-col {
                // !important needed to override my-auto which is used for vertical centering
                margin-top: $padding-md !important;
            }
        }

        .btn-col {
            padding: 0;

            .btn, .btn:focus, .btn:hover {
                background-color: transparent;
                color: $blue;
                border: none;
                border-radius: 0;
                padding: 0;

                i, i *, i::before, i::after {
                    font-size: 1.25em;
                }
            }

            .btn:hover {
                @extend %default-gradient;
                -webkit-background-clip: text;
                cursor: pointer;

                i, i *, i::before, i::after {
                    white-space: nowrap;
                    -webkit-text-fill-color: transparent;
                }
            }
        }

        .details {
            margin-top: $padding-md;
            text-align: left;

            mark {
                @include px($padding-sm);
                background-color: var(--detail-color-trans);
                color: var(--h-color);
                border-radius: 1em;
                position: absolute;
                top: 0;
                right: 15px;
            }

            h4 {
                margin: {
                    top: 0;
                    bottom: $padding-md;
                }
            }

            .courses {
                margin-top: $padding-md;

                .subject {
                    @include mb-abl($padding-md);
                }

                h5 {
                    margin-bottom: $padding-xs;
                }
            }
        }

        .details-enter-active, .details-leave-active {
            transition: opacity .5s;
        }

        .details-enter, .details-leave-to {
            opacity: 0;
        }
    }
</style>