<script lang="ts">
  export let href: string;
  export let openInNewTab: boolean = true;

  $: target = openInNewTab ? "_blank" : "_self";
</script>

<span class="outer relative inline whitespace-nowrap"
  ><a {href} {target} class="inline no-underline"><slot /></a><span
    class="inner inline absolute left-0 right-0 bg-gray-900 dark:bg-gray-50"
  /></span
>

<style lang="scss">
  span.outer {
    font-size: inherit;

    span.inner {
      height: 1px;
      bottom: 0;
    }

    a,
    span.inner {
      transition: all 100ms linear;
    }

    &:hover a {
      color: var(--color-accent);
    }

    &:hover span.inner {
      bottom: -2px;
      background-color: var(--color-accent);
    }
  }
</style>
