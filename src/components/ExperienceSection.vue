<template>
    <section id="experience">
        <section-header title="experience" fa-icon="fas fa-briefcase"></section-header>
        <transition-group name="companies" tag="div">
            <company-display v-for="company in companiesToShow"
                             :key="company.code"
                             :company="company"
                             :showAll="showAll"></company-display>
        </transition-group>
        <div class="btn" @click="toggleShowAll">{{ buttonText }}</div>
    </section>
</template>

<script>
    import SectionHeader from "./SectionHeader";
    import CompanyDisplay from "./CompanyDisplay";
    import {ExperienceData} from "../modules/Data.js"

    const buttonText = {'show': 'show all jobs', 'hide': 'hide irrelevant jobs'};

    export default {
        name: "ExperienceSection",
        components: {CompanyDisplay, SectionHeader},
        data: function () {
            return {
                allCompanies: ExperienceData,
                relevantCompanies: ExperienceData.filter(company => company.relevant),
                showAll: false
            }
        },
        computed: {
            buttonText: function () {
                return this.showAll ? buttonText.hide : buttonText.show;
            },
            companiesToShow: function () {
                return this.showAll ? this.allCompanies : this.relevantCompanies;
            }
        },
        methods: {
            toggleShowAll: function () {
                this.showAll = !this.showAll;
            }
        },
    }
</script>

<style lang="scss">
    section#experience {
        .companies-enter-active, .companies-leave-active {
            transition: all 1s;
        }

        .companies-enter {
            opacity: 0;
            transform: translateX(-20px);
        }

        .companies-leave-to {
            opacity: 0;
            transform: translateX(20px);
        }

        .companies-move {
            transition: transform 1s;
        }

        .btn {
            margin-top: $padding-lg;
        }
    }
</style>