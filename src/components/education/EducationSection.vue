<template>
    <section id="education" class="py-5">
        <b-container fluid>
            <section-header title="education" fa-icon="fas fa-graduation-cap"></section-header>
            <school-display v-for="school in schools" :key="school.code" :school="school"></school-display>
        </b-container>
    </section>
</template>

<script>
    import SectionHeader from "../SectionHeader";
    import SchoolDisplay from "./SchoolDisplay";
    import {EducationData} from '../../modules/Data.js'

    export default {
        name: "EducationSection",
        components: {SchoolDisplay, SectionHeader},
        data: function () {
            return {
                schools: EducationData
            }
        }
    }
</script>

<style lang="scss">
    section#education {
        // intentionally blank
    }
</style>