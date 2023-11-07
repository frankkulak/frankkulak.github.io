<script lang="ts">
  import SkillPills from "src/components/views/SkillPills.svelte";
  import type { ProjectData } from "src/data/types";
  import ProjectLinkIcon from "./ProjectLinkIcon.svelte";

  export let project: ProjectData;

  $: hasRepo = Boolean(project.repository);
  $: hasSite = Boolean(project.webpage);
  $: hasLinks = hasRepo || hasSite;
</script>

<div class="flex flex-col gap-4">
  <div class="flex gap-4 items-center flex-wrap">
    <h3 class="text-lg font-bold">{project.name}</h3>
    {#if hasLinks}
      <p class="text-subtle">|</p>
      <div class="flex gap-4">
        {#if hasRepo}
          <ProjectLinkIcon
            href={project.repository}
            title="Repository"
            icon="logo-github"
          />
        {/if}
        {#if hasSite}
          <ProjectLinkIcon href={project.webpage} title="Webpage" icon="link" />
        {/if}
      </div>
    {/if}
  </div>
  <p>{project.description}</p>
  <SkillPills skills={project.skills} />
</div>
