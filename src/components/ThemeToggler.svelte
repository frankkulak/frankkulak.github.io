<script lang="ts">
  import Settings from "src/lib/utils/settings";

  let isLightTheme = Settings.isLightTheme;
  $: themeIcon = isLightTheme ? "sunny" : "moon";

  function toggleTheme() {
    Settings.isLightTheme = !Settings.isLightTheme;
    isLightTheme = Settings.isLightTheme;
  }
</script>

<button on:click={toggleTheme} class="sm:opacity-80 sm:hover:opacity-100">
  <img
    src="./assets/icons/{themeIcon}-outline.svg"
    alt={themeIcon}
    class="svg h-5"
  />
</button>
