<script lang="ts">
  import type { ExperienceData } from "src/data/types";
  import SkillPills from "src/components/views/SkillPills.svelte";

  export let experience: ExperienceData;

  $: previousTitles = experience.previousTitles?.join(", ");
  $: hasSkills = Boolean(experience.skills?.length);
  $: hasProjects = Boolean(experience.projects?.length);
</script>

<div class="flex flex-col gap-4">
  <div>
    <p class="uppercase text-subtle text-sm">{experience.timespan}</p>
    <h3 class="font-bold text-lg">{experience.title} @ {experience.company}</h3>
    {#if Boolean(previousTitles)}
      <p class="text-subtle text-sm">Formerly: {previousTitles}</p>
    {/if}
  </div>
  <p>{experience.description}</p>
  {#if hasProjects}
    <ul class="projects-list text-sm">
      Projects:&nbsp;
      {#each experience.projects as project}
        <li>
          {#if Boolean(project.link)}
            <a href={project.link} target="_blank">{project.name}</a>
          {:else}
            <span>{project.name}</span>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
  {#if hasSkills}
    <SkillPills skills={experience.skills} />
  {/if}
</div>

<style lang="scss">
  ul.projects-list {
    display: inline;
    list-style: none;

    li {
      display: inline;

      &:after {
        content: " • ";
      }

      &:last-child:after {
        content: "";
      }
    }
  }
</style>
