<script lang="ts">
  import ArchivePageHeader from "src/components/views/ArchivePageHeader.svelte";
  import ProjectRow from "./table/ProjectRow.svelte";
  import websiteContent from "src/data/content";

  const projects = websiteContent.archives.projects;
</script>

<svelte:head>
  <title>Frank Kulak | Projects</title>
</svelte:head>

<div class="pt-24 px-4">
  <ArchivePageHeader title="All Projects" />
  <table class="w-full border-collapse text-left">
    <thead>
      <tr class="border-b border-gray-300 dark:border-gray-700">
        <th class="py-4 pr-4">Status</th>
        <th class="py-4 pr-4">Project</th>
        <th class="py-4 pr-4">Type</th>
        <th class="py-4 pr-4">Tech Stack</th>
        <th class="py-4">Links</th>
      </tr>
    </thead>
    <tbody>
      {#each projects as project}
        <ProjectRow {project} />
      {/each}
    </tbody>
  </table>
</div>
