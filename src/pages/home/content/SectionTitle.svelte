<script lang="ts">
  export let title: string;
  export let hideOnDesktop = false;
</script>

<div class="flex items-center gap-4 mb-12" class:sm:hidden={hideOnDesktop}>
  <hr class="w-8 border border-solid border-gray-600 dark:border-gray-400" />
  <div>
    <h2
      class="uppercase text-subtle font-bold tracking-widest whitespace-nowrap"
    >
      {title}
    </h2>
  </div>
  <hr class="w-full border border-solid border-gray-600 dark:border-gray-400" />
</div>
