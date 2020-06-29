<template>
    <div id="app">
        <home-section/>
        <navbar/>
        <b-container fluid>
            <b-row align-h="center">
                <about-section/>
            </b-row>
            <b-row align-h="center" class="banded">
                <education-section/>
            </b-row>
            <b-row align-h="center">
                <experience-section/>
            </b-row>
            <b-row align-h="center" class="banded">
                <skills-section/>
            </b-row>
            <b-row align-h="center">
                <projects-section/>
            </b-row>
            <b-row align-h="center" class="footer">
                <contact-section/>
            </b-row>
        </b-container>
        <theme-toggle/>
    </div>
</template>

<script>
    import HomeSection from "@/components/HomeSection";
    import AboutSection from "@/components/AboutSection";
    import EducationSection from "@/components/EducationSection";
    import ExperienceSection from "@/components/ExperienceSection";
    import SkillsSection from "@/components/SkillsSection";
    import ProjectsSection from "@/components/ProjectsSection";
    import ContactSection from "@/components/ContactSection";
    import Navbar from "@/components/Navbar";
    import ThemeToggle from "@/components/ThemeToggle";

    export default {
        name: 'App',
        components: {
            ThemeToggle,
            Navbar,
            ContactSection,
            ProjectsSection,
            SkillsSection,
            ExperienceSection,
            EducationSection,
            AboutSection,
            HomeSection
        }
    }
</script>

<style lang="scss">
    #app {
        .container-fluid {
            padding: 0;

            & > .row {
                @include px($padding-sm);

                &.banded {
                    background-color: var(--bg-band-color);
                }

                &.footer {
                    background-color: var(--primary-color);
                    opacity: 0.95;
                }
            }
        }

        .row {
            @include mx(0);
        }

        section {
            @include py($padding: $padding-lg);
        }
    }
</style>