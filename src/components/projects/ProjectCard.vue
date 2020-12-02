<template>
    <b-col cols="12" md="6" class="project-card-container mb-5">
        <div class="project-card h-100">
            <div class="project-header-container px-4 py-3">
                <b-row>
                    <b-col cols="12" md="6">
                        <h2 class="text-nowrap">{{ project.name }}</h2>
                    </b-col>
                    <b-col cols="12" md="6" class="position">
                        <p>{{ project.category }}</p>
                    </b-col>
                </b-row>
            </div>
            <div class="project-content-container p-4">
                <h4>purpose</h4>
                <p v-html="project.purpose" class="pb-3"></p>
                <h4>technology</h4>
                <p v-html="project.technology"></p>
                <b-row class="project-links justify-content-around py-3">
                    <b-button size="small" v-for="(link, n) in project.links" :key="`${project.id}_link:${n}`"
                              :href="link.url" target="_blank">
                        <i :class="link.icon" class="mr-2"/>{{ link.text }}
                    </b-button>
                </b-row>
            </div>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            project: Object
        }
    }
</script>

<style lang="scss">
    .project-card-container {
        &:last-child {
            margin-bottom: 0 !important;
        }
    }

    .project-card {
        text-align: left;
        background-color: var(--card-bg-color);
        @extend %cropped-box;

        .project-header-container {
            @extend %default-gradient;
            @extend %cropped-box;

            h2, p {
                color: var(--light-color);
                margin-bottom: 0;
            }

            @media (min-width: 768px) {
                .col-12.position {
                    text-align: right;
                }
            }
        }

        .project-content-container {
            p:last-child {
                margin-bottom: 0;
            }

            .project-links {
                width: 100%;
                margin: 0 !important;
            }
        }
    }
</style>