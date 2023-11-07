<script lang="ts">
  import HeaderAnchor from "./HeaderAnchor.svelte";
  import SocialLinks from "./SocialLinks.svelte";

  export let activeSectionId: string;
</script>

<header
  class="md:sticky md:top-0 md:max-h-screen w-full md:w-1/3 lg:w-1/2 flex items-center justify-center px-6 pt-24 md:pb-24"
>
  <div
    class="flex-1 h-full flex flex-col gap-8 md:gap-0 justify-between md:items-start items-center"
  >
    <div>
      <div class="flex flex-col lg:flex-row gap-4 items-center">
        <img
          src="./assets/profile-pic.jpg"
          alt="Me"
          class="h-36 md:h-24 w-36 md:w-24 rounded-full shadow-md"
        />
        <div class="text-center lg:text-left">
          <h1 class="text-2xl lg:text-4xl font-bold mb-2 text-gradient">
            Frank Kulak
          </h1>
          <p>Engineer II at The TJX Companies</p>
        </div>
      </div>
      <p
        class="text-subtle max-w-sm md:mt-4 mt-8 lg:text-left text-center text-sm lg:text-base"
      >
        I make cross-platform mobile apps, websites, and mods/modding tools for
        The Sims 4.
      </p>
    </div>
    <nav class="hidden md:block">
      <ul class="flex flex-col gap-2">
        <HeaderAnchor
          title="About"
          sectionId="about"
          {activeSectionId}
          index={0}
        />
        <HeaderAnchor
          title="Experience"
          sectionId="experience"
          {activeSectionId}
          index={1}
        />
        <HeaderAnchor
          title="Projects"
          sectionId="projects"
          {activeSectionId}
          index={2}
        />
        <HeaderAnchor
          title="Skills"
          sectionId="skills"
          {activeSectionId}
          index={3}
        />
      </ul>
    </nav>
    <SocialLinks />
  </div>
</header>
