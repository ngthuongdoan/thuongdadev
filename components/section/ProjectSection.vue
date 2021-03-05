<template>
  <div class="overflow-auto">
    <project
      v-for="project in projects"
      :key="project.id"
      :project="project"
    ></project>
  </div>
</template>

<script>
import Project from '@/components/Project'
import mockProjects from '@/service/projects'
export default {
  data() {
    return {
      projects: mockProjects,
    }
  },
  components: {
    Project,
  },
}
</script>

<style>
</style>