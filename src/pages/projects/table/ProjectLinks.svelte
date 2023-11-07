<script lang="ts">
  import type { ArchivedProjectData } from "src/data/types";
  import ProjectLinkIcon from "./ProjectLinkIcon.svelte";

  export let project: ArchivedProjectData;

  $: hasRepo = Boolean(project.repository);
  $: hasSite = Boolean(project.webpage);
</script>

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
