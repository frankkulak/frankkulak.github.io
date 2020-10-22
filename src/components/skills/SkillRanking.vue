<template>
    <b-col cols="12" md="6" class="skill-ranking my-3">
        <div class="skill-ranking-container p-3">
            <h4 class="mb-3" v-html="headerText"></h4>
            <b-progress :value="skill.rating" max="10"></b-progress>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: "SkillRanking",
        props: {
            skill: Object
        },
        computed: {
            headerText: function () {
                const {title, description} = this.$props.skill;

                if (!description) {
                    return title;
                } else {
                    return `${title} • <span>${description}</span>`;
                }
            }
        }
    }
</script>

<style lang="scss">
    .skill-ranking {
        .skill-ranking-container {
            @extend %cropped-box;
            background-color: var(--card-bg-color);
        }

        h4 > span {
            font-weight: normal;
        }

        .progress {
            background-color: white;
            box-shadow: 0 4px 8px var(--shadow-color);

            .progress-bar {
                @extend %default-gradient;
            }
        }
    }
</style>