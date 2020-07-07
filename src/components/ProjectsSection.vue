<template>
    <section id="projects">
        <section-header title="projects" fa-icon="fas fa-code"></section-header>
        <b-row align-h="center">
            <b-col cols="12" md="10" lg="8">
                <b-row align-h="center" class="buttons">
                    <div v-for="category in categories" :key="category.title" class="btn" :title="buttonTitle(category)"
                         :class="selectedCategory === category.title && 'selected'" @click="handleClick(category)">
                        {{ category.title }}
                    </div>
                </b-row>
                <b-row align-h="center" class="cards">
                    <project-card v-for="(project, index) in projectsToShow" :key="index"
                                  :project="project"></project-card>
                </b-row>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import SectionHeader from "./SectionHeader";
    import ProjectCard from "./ProjectCard";
    import {ProjectsData} from "../modules/Data.js";

    export default {
        name: "ProjectsSection",
        components: {ProjectCard, SectionHeader},
        data: function () {
            return {
                categories: ProjectsData,
                selectedCategory: ProjectsData[0].title
            }
        },
        computed: {
            projectsToShow: function () {
              return this.categories.find(({title}) => title === this.selectedCategory).projects;
            }
        },
        methods: {
            buttonTitle: function ({title}) {
                return `view ${title} projects`;
            },
            handleClick: function ({title}) {
                this.selectedCategory = title;
            }
        },
    }
</script>

<style lang="scss">
    section#projects {
        .buttons {
            margin-bottom: $padding-lg;

            .btn {
                @include mx($margin: $padding-sm);

                &.selected {
                    @extend %default-gradient;
                    color: white;
                    border-color: var(--bg-color);
                    pointer-events: none;
                }
            }
        }

        .cards {
            [class^="col"] {
                padding: 0;
            }
        }
    }
</style>