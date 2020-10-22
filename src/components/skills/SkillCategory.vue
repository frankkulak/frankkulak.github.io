<template>
    <b-row class="skill-category mb-4">
        <b-col cols="12">
            <h2>{{ category.title }}</h2>
        </b-col>
        <skill-ranking v-for="(skill, index) in category.skills"
                       :key="`${category.title}:${index}`"
                       :skill="skill"/>
    </b-row>
</template>

<script>
    import SkillRanking from "./SkillRanking";

    export default {
        name: "SkillCategory",
        components: {SkillRanking},
        props: {
            category: Object
        }
    }
</script>

<style lang="scss">
    .skill-category {
        text-align: left;

        &:last-child {
            margin-bottom: 0 !important;
        }
    }
</style>