<template>
    <section id="experience" class="py-5">
        <b-container fluid>
            <section-header title="experience" fa-icon="fas fa-briefcase"></section-header>
            <position-display v-for="position in positions" :key="position.code" :position="position"/>
        </b-container>
    </section>
</template>

<script>
    import SectionHeader from "../SectionHeader";
    import PositionDisplay from "./PositionDisplay";
    import {ExperienceData} from "../../modules/Data.js"

    export default {
        name: "ExperienceSection",
        components: {PositionDisplay, SectionHeader},
        data: function () {
            return {
                positions: ExperienceData,
            }
        },
    }
</script>

<style lang="scss">
    section#experience {
        // intentionally blank
    }
</style>