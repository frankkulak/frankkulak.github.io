<template>
    <section id="education">
        <section-header title="education" fa-icon="fas fa-graduation-cap"></section-header>
        <school-display v-for="school in schools" :key="school.code" :school="school"></school-display>
    </section>
</template>

<script>
    import SectionHeader from "@/components/SectionHeader";
    import SchoolDisplay from "@/components/SchoolDisplay";
    import {EducationData} from '../modules/Data.js'

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
        // todo
    }
</style>