<template>
    <b-col cols="12" sm="8" md="6" class="project-card">
        <div class="outline">
            <div class="content">
                <h4>{{ project.name }}</h4>
                <p v-html="project.description"></p>
                <b-row align-h="end" class="links">
                    <a v-for="(link, index) in project.links" :key="`${project.name}:${index}`" :href="link.url"
                       target="_blank" :title="link.text"><i :class="link.icon"></i></a>
                </b-row>
            </div>
        </div>
    </b-col>
</template>

<script>
    import Util from "../modules/Util.js";

    export default {
        name: "ProjectCard",
        props: {
            project: Object
        },
        computed: {
            dateSpanHTML: function () {
                return Util.formatDateSpanHTML(this.project);
            }
        }
    }
</script>

<style lang="scss">
    .project-card {
        padding: 0;

        $card-radius: 15px;
        $border-thickness: 2px;

        .outline {
            @extend %default-gradient;
            margin: $padding-xs;
            padding: $border-thickness;
            border-radius: $card-radius + $border-thickness;
        }

        .content {
            text-align: left;
            background-color: var(--bg-color);
            border-radius: $card-radius;
            padding: $padding-md;

            p {
                @include my($padding-md);

                a, a:focus {
                    color: var(--text-color);
                    text-decoration: underline;
                }

                a:hover {
                    color: var(--accent-color);
                    text-decoration: none;
                }
            }

            .links {
                a, a:focus, a:hover {
                    margin-right: $padding-md;

                    &:last-child {
                        margin-right: 0;
                    }
                }

                a, a:focus {
                    color: var(--text-color);
                }

                a:hover {
                    color: var(--accent-color);

                    i, i *, i::before, i::after {
                        color: var(--accent-color);
                    }
                }

                i, i *, i::before, i::after {
                    font-size: 1.25em;

                    // required for smooth theme transition
                    color: var(--text-color);
                }
            }
        }
    }
</style>