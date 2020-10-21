<template>
    <section id="skills">
        <section-header title="skills" fa-icon="fas fa-cogs"></section-header>
        <skill-category v-for="category in categories"
                        :key="category.title"
                        :category="category"></skill-category>
    </section>
</template>

<script>
    import SectionHeader from "../SectionHeader";
    import SkillCategory from "./SkillCategory";
    import {SkillsData} from "../../modules/Data.js";

    export default {
        name: "SkillsSection",
        components: {SkillCategory, SectionHeader},
        data: function () {
            return {
                categories: SkillsData
            }
        }
    }
</script>

<style lang="scss">
    section#skills {
        // intentionally blank
    }
</style>