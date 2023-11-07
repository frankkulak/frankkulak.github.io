<script lang="ts">
  export let title: string;
  export let icon: string;
  export let href: string;
</script>

<a {title} {href} target="_blank"
  ><img
    alt={icon}
    class="svg h-8 w-8 md:opacity-80 md:hover:opacity-100"
    src="./assets/icons/{icon}.svg"
  /></a
>
