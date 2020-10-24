<template>
    <section id="projects" class="py-5">
        <b-container fluid>
            <section-header title="projects" fa-icon="fas fa-code"></section-header>
            <b-row>
                <project-card v-for="project in projects" :key="project.id" :project="project"/>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import SectionHeader from "../SectionHeader";
    import ProjectCard from "./ProjectCard";
    import {ProjectsData} from "../../modules/Data.js";

    export default {
        name: "ProjectsSection",
        components: {ProjectCard, SectionHeader},
        data: function () {
            return {
                projects: ProjectsData
            }
        }
    }
</script>

<style lang="scss">
    section#projects {
        // intentionally blank
    }
</style>