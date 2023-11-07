<script lang="ts">
  import { fly } from "svelte/transition";

  export let title: string;
  export let sectionId: string;
  export let activeSectionId: string;
  export let index: number;

  $: active = sectionId === activeSectionId;
  $: flyDelay = index * 128;

  function scrollToSection() {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
</script>

<li
  class="border-solid border-l-2 border-l-transparent pl-4"
  class:active
  in:fly={{ x: -32, delay: flyDelay }}
>
  <button
    on:click={scrollToSection}
    class="opacity-50 hover:opacity-100"
    class:active>{title}</button
  >
</li>

<style lang="scss">
  li.active {
    border-left-color: var(--color-accent);

    button {
      opacity: 1 !important;
    }
  }
</style>
