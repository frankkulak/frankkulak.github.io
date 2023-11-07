<script lang="ts">
  import LifePathNode from "./LifePathNode.svelte";
</script>

<div class="flex flex-wrap justify-center gap-8 mx-auto">
  <LifePathNode
    label="Lifelong interest in technology"
    primaryIcon="terminal"
  />
  <LifePathNode label="B.S. in Comp Sci @ Northeastern" primaryIcon="school" />
  <LifePathNode
    label="3+ years app dev experience"
    primaryIcon="phone-portrait"
  />
  <LifePathNode
    label="Web and game dev hobbies"
    primaryIcon="desktop"
    secondaryIcon="game-controller"
  />
</div>
