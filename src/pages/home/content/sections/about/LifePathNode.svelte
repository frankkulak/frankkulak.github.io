<script lang="ts">
  export let label: string;
  export let primaryIcon: string;
  export let secondaryIcon: string = null;

  $: hasSecondaryIcon = Boolean(secondaryIcon);
</script>

<div class="flex flex-col items-center gap-2 text-center z-0">
  {#if hasSecondaryIcon}
    <div class="flex items-end gap-2">
      <img
        src="./assets/icons/{primaryIcon}.svg"
        alt={primaryIcon}
        class="svg h-10"
      />
      <img
        src="./assets/icons/{secondaryIcon}.svg"
        alt={secondaryIcon}
        class="svg h-6"
      />
    </div>
  {:else}
    <img
      src="./assets/icons/{primaryIcon}.svg"
      alt={primaryIcon}
      class="svg h-10"
    />
  {/if}

  <p class="text-subtle text-sm w-28">
    {label}
  </p>
</div>
