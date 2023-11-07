<script lang="ts">
  import type { ArchivedProjectData } from "src/data/types";

  export let project: ArchivedProjectData;
</script>

{#if project.status === "Ongoing"}
  <div
    class="flex items-center gap-2 max-w-fit rounded-full px-3 py-1 bg-emerald-900"
  >
    <div class="h-2 w-2 rounded-full bg-emerald-200" />
    <p class="text-sm text-emerald-200">Ongoing</p>
  </div>
{:else if project.status === "Maintaining"}
  <div
    class="flex items-center gap-2 max-w-fit rounded-full px-3 py-1 bg-fuchsia-900"
  >
    <div class="h-2 w-2 rounded-full bg-fuchsia-200" />
    <p class="text-sm text-fuchsia-200">Maintaining</p>
  </div>
{:else}
  <div
    class="flex items-center gap-2 max-w-fit rounded-full px-3 py-1 bg-rose-900"
  >
    <div class="h-2 w-2 rounded-full bg-rose-200" />
    <p class="text-sm text-rose-200">Complete</p>
  </div>
{/if}
