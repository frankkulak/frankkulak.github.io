<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Header from "./header/Header.svelte";
  import MainContent from "./content/MainContent.svelte";
  import Footer from "src/components/Footer.svelte";

  let activeSectionId = "";
  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSectionId = entry.target.id;
          }
        });
      },
      { rootMargin: "-50% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  onDestroy(() => {
    observer.disconnect();
  });
</script>

<svelte:head>
  <title>Frank Kulak</title>
</svelte:head>

<div class="md:flex md:justify-between gap-4">
  <Header {activeSectionId} />
  <MainContent />
</div>
