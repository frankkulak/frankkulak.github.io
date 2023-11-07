<script lang="ts">
  import websiteContent from "src/data/content";
  import SkillsBlock from "./SkillsBlock.svelte";

  $: skills = websiteContent.sections.skills;
  $: hasSkills = Boolean(skills?.length);
</script>

<div class="flex flex-col gap-12">
  {#if hasSkills}
    {#each skills as skill}
      <SkillsBlock {skill} />
    {/each}
  {/if}
</div>
