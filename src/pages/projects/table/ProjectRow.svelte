<script lang="ts">
  import type { ArchivedProjectData } from "src/data/types";
  import ProjectLinks from "./ProjectLinks.svelte";
  import SkillPills from "src/components/views/SkillPills.svelte";
  import ProjectStatus from "./ProjectStatus.svelte";

  export let project: ArchivedProjectData;

  $: hasSkills = Boolean(project.skills?.length);
</script>

<tr class="border-b border-gray-300 dark:border-gray-700">
  <td class="py-4 pr-4">
    <ProjectStatus {project} />
  </td>
  <td class="py-4 pr-4">
    <p class="font-bold">{project.name}</p>
  </td>
  <td class="py-4 pr-4">
    <p>{project.type}</p>
  </td>
  <td class="py-4 pr-4">
    {#if hasSkills}
      <SkillPills skills={project.skills} />
    {/if}
  </td>
  <td class="py-4 pr-4">
    <ProjectLinks {project} />
  </td>
</tr>
