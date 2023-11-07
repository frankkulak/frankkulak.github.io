<script lang="ts">
  export let icon: string;
  export let title: string;
  export let href: string;
</script>

<a {href} {title} target="_blank"
  ><img
    src="./assets/icons/{icon}.svg"
    alt={title}
    class="svg h-6 w-6 sm:opacity-80 hover:sm:opacity-100"
  /></a
>
