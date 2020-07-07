<template>
    <b-row align-h="center" class="skill-category">
        <b-col cols="12" md="10" lg="8">
            <h4 class="category">{{ category.title }}</h4>
            <skill-ranking v-for="(skill, index) in category.skills"
                           :key="`${category.title}:${index}`"
                           :skill="skill"/>
        </b-col>
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
        @include mb-abl($padding-lg);
        text-align: left;

        h4.category {
            color: var(--detail-color);
            margin-bottom: $padding-md;
        }
    }
</style>