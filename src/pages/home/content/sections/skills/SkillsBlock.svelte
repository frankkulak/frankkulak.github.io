<script lang="ts">
  import SkillPills from "src/components/views/SkillPills.svelte";
  import type { SkillsData } from "src/data/types";

  export let skill: SkillsData;
</script>

<div>
  <h3 class="mb-4">{skill.category}</h3>
  <SkillPills skills={skill.skills} />
</div>
