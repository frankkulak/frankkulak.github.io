<template>
    <div id="app">
        <home-section/>
        <navbar/>
        <about-section/>
        <education-section class="banded"/>
        <experience-section/>
<!--        <skills-section class="banded"/>-->
<!--        <projects-section/>-->
<!--        <contact-section/>-->
        <theme-toggle/>
    </div>
</template>

<script>
    import HomeSection from "@/components/home/HomeSection";
    import AboutSection from "@/components/about/AboutSection";
    import EducationSection from "@/components/education/EducationSection";
    import ExperienceSection from "@/components/experience/ExperienceSection";
    //import SkillsSection from "@/components/skills/SkillsSection";
    //import ProjectsSection from "@/components/projects/ProjectsSection";
    //import ContactSection from "@/components/contact/ContactSection";
    import Navbar from "@/components/Navbar";
    import ThemeToggle from "@/components/ThemeToggle";

    export default {
        name: 'App',
        components: {
            ThemeToggle,
            Navbar,
            //ContactSection,
            //ProjectsSection,
            // SkillsSection,
            ExperienceSection,
            EducationSection,
            AboutSection,
            HomeSection
        }
    }
</script>

<style lang="scss">
    #app {
        section {
            width: 100%;

            &.banded {
                background-color: var(--bg-band-color);
            }
        }

        .container-fluid {
            max-width: 992px;
        }
    }
</style>