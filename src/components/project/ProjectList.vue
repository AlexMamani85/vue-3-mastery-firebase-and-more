<template>
  <ProjectListItem
    v-for="project in projects"
    :project="project"
    :key="project.id"
  />
</template>

<script>
import ProjectListItem from "../project/ProjectListItem.vue";
export default {
  components: { ProjectListItem },
  props: { projects: Array },
};
</script>
