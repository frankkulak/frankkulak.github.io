<script lang="ts">
  import websiteContent from "src/data/content";
  import ArrowButton from "src/components/elements/ArrowLink.svelte";
  import ExperienceBlock from "./ExperienceBlock.svelte";

  $: experiences = websiteContent.sections.experience;
</script>

<div>
  <div class="mb-12 flex flex-col gap-12">
    {#each experiences as experience}
      <ExperienceBlock {experience} />
    {/each}
  </div>

  <ArrowButton
    text="View More on LinkedIn"
    href="https://www.linkedin.com/in/frank-kulak/"
    useNewTab={true}
  />
</div>
