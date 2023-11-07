<script lang="ts">
  export let text: string;
  export let href: string;
  export let direction: "forward" | "back" = "forward";
  export let useNewTab: boolean = false;

  $: isForward = direction === "forward";
  $: target = useNewTab ? "_blank" : "_self";
</script>

<a {href} {target} class="flex items-center gap-2 no-underline">
  {#if !isForward}
    <img src="./assets/icons/arrow-back.svg" alt="←" class="back svg h-4" />
  {/if}
  <p>{text}</p>
  {#if isForward}
    <img
      src="./assets/icons/arrow-forward.svg"
      alt="→"
      class="forward svg h-4"
    />
  {/if}
</a>

<style lang="scss">
  img {
    transition: all 100ms linear;
  }

  a:hover img {
    &.forward {
      margin-left: 4px;
    }

    &.back {
      margin-left: -4px;
      margin-right: 4px;
    }
  }
</style>
