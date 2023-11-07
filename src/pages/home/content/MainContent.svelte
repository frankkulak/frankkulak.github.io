<script lang="ts">
  import Footer from "src/components/Footer.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import AboutContentSection from "./sections/about/AboutContentSection.svelte";
  import ExperienceContentSection from "./sections/experience/ExperienceContentSection.svelte";
  import ProjectsContentSection from "./sections/projects/ProjectsContentSection.svelte";
  import SkillsContentSection from "./sections/skills/SkillsContentSection.svelte";
</script>

<main class="flex-1 flex flex-col w-full md:w-2/3 lg:w-1/2 pb-24 lg:px-6 px-4">
  <section id="about" class="pt-24">
    <SectionTitle title="About" hideOnDesktop={true} />
    <AboutContentSection />
  </section>

  <section id="experience" class="pt-24">
    <SectionTitle title="Relevant Experience" />
    <ExperienceContentSection />
  </section>

  <section id="projects" class="pt-24">
    <SectionTitle title="Selected Projects" />
    <ProjectsContentSection />
  </section>

  <section id="skills" class="pt-24">
    <SectionTitle title="Skills" />
    <SkillsContentSection />
  </section>

  <Footer />
</main>
