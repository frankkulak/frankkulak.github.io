<template>
    <table class="skill-ranking">
        <tr>
            <td>
                <h4>{{ skill.title }}</h4>
            </td>
            <td class="rating">
                <b-row class="skill-bar mx-auto" :title="ratingTitle(skill.rating)">
                    <span v-for="n in 10" :key="n" class="skill-cell" :class="ratingClass(n)"></span>
                </b-row>
            </td>
        </tr>
        <tr v-if="skill.description !== ''">
            <td colspan="2">
                <p>{{ skill.description }}</p>
            </td>
        </tr>
    </table>
</template>

<script>
    const ratings = [
        {
            label: 'novice',
            description: "I could probably make a 'Hello World' program with this."
        },
        {
            label: 'familiar',
            description: "I could write a program with this, but may need to Google frequently."
        },
        {
            label: 'comfortable',
            description: "I could easily program with this, but have little to no formal experience with it."
        },
        {
            label: 'proficient',
            description: "I could easily program with this, and have used it extensively at work or school."
        },
        {
            label: 'expert',
            description: "I've been using this for so long, it feels like second nature at this point."
        }
    ];

    export default {
        name: "SkillRanking",
        props: {
            skill: Object
        },
        methods: {
            ratingClass: function (n) {
                return n <= this.skill.rating ? 'full' : '';
            },
            ratingTitle: function (n) {
                const title = ratings[n - 1];
                return `${title.label}: ${title.description}`
            }
        },
    }
</script>

<style lang="scss">
    .skill-ranking {
        //@include mb-abl($padding-md);
        width: 100%;

        td.rating {
            width: 50%;
        }

        .skill-bar {
            justify-content: flex-end;
            width: 100%;

            .skill-cell {
                width: 8%;
                min-height: 16px * 1.5;
                background-color: var(--detail-color-trans);
                margin-right: 2px;

                &.full {
                    background-color: var(--detail-color);
                }

                $pill-radius: 10px;

                &:first-child {
                    border-radius: $pill-radius 0 0 $pill-radius;
                }

                &:last-child {
                    margin-right: 0;
                    border-radius: 0 $pill-radius $pill-radius 0;
                }
            }
        }
    }
</style>