<script lang="ts">
  import ArrowLink from "src/components/elements/ArrowLink.svelte";

  export let title: string;
</script>

<div class="mb-12">
  <ArrowLink text="Frank Kulak" href="#" direction="back" />
  <h1 class="mt-4 text-3xl md:text-4xl font-bold text-gradient max-w-fit">
    {title}
  </h1>
</div>
