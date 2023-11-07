<script lang="ts">
  import websiteContent from "src/data/content";
  import ArrowButton from "src/components/elements/ArrowLink.svelte";
  import ProjectBlock from "./ProjectBlock.svelte";

  $: projects = websiteContent.sections.projects;
</script>

<div>
  <div class="mb-12 flex flex-col gap-12">
    {#each projects as project}
      <ProjectBlock {project} />
    {/each}
  </div>

  <ArrowButton
    text="View More on GitHub"
    href="https://github.com/frankkulak"
    useNewTab={true}
  />
</div>
