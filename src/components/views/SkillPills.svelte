<script lang="ts">
  export let skills: string[];
</script>

<div class="flex flex-wrap gap-2">
  {#each skills as skill}
    <p
      class="bg-sky-200 text-sky-900 dark:bg-sky-900 dark:text-sky-200 max-w-fit px-2 py-1 text-sm rounded-full shadow-sm"
    >
      {skill}
    </p>
  {/each}
</div>
