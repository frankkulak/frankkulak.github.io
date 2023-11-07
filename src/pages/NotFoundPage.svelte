<script lang="ts">
  import SectionHeader from "src/components/elements/SectionHeader.svelte";
</script>

<svelte:head>
  <title>Page Not Found</title>
</svelte:head>

<section class="h-screen w-full flex justify-center">
  <div class="w-full xl:max-w-screen-xl px-4 flex flex-col justify-center">
    <div class="mb-4">
      <SectionHeader title="Here be... nothing" />
    </div>
    <p class="mb-8">
      This page doesn't exist. Please visit the <a href="/" class="text-accent"
        >home page</a
      >.
    </p>
    <p class="text-subtle text-xs">Error 404</p>
  </div>
</section>
