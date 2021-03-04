<template>
  <div
    class="slide w-full h-full flex justify-center items-center px-36"
    :data-anchor="project.id"
  >
    <h1>{{ project.title }}</h1>
    <div class="flex self-center">
      <icon
        v-for="icon in project.technologies"
        :key="icon"
        :icon-name="icon"
      ></icon>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
    Icon,
  },
}
</script>

<style>
</style>