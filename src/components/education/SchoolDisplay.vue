<template>
    <div class="school-display">
        <div class="school-name-container px-4 py-3">
            <h2>{{ school.name }}</h2>
        </div>
        <div class="school-details-container p-4">
            <p class="mb-0">{{ school.degree }}</p>
            <p>Honors: {{ school.honors }} (GPA {{ school.gpa }})</p>
            <p>{{ school.dates }} • {{ school.location }}</p>
        </div>
    </div>
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
    }
</script>

<style lang="scss">
    .school-display {
        text-align: left;
        background-color: var(--card-bg-color);
        @extend %cropped-box;

        .school-name-container {
            @extend %default-gradient;
            @extend %cropped-box;

            h2 {
                color: var(--light-color);
                margin-bottom: 0;
            }
        }

        .school-details-container {
            p:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>