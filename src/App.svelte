<script lang="ts">
  import Router from "svelte-spa-router";
  import ThemeToggler from "src/components/ThemeToggler.svelte";
  import BackgroundDecals from "src/components/views/BackgroundDecals.svelte";
  import HomePage from "src/pages/home/HomePage.svelte";
  import NotFoundPage from "src/pages/NotFoundPage.svelte";
  // import ProjectsPage from "src/pages/projects/ProjectsPage.svelte";

  const routes = {
    "/": HomePage,
    // "/projects": ProjectsPage,
    "*": NotFoundPage,
  };
</script>

<div class="fixed top-4 right-4 z-50"><ThemeToggler /></div>
<div class="min-h-screen max-w-screen-xl mx-auto">
  <Router {routes} restoreScrollState={true} />
</div>
<BackgroundDecals />
