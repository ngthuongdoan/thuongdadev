<template>
  <div class="slide" :data-anchor="project.id">
    <div class="w-screen h-screen flex justify-start items-start mt-24 px-20">
      <div class="w-1/2">
        <img src="~@/assets/img/mafamile.png" alt="" />
      </div>
      <div class="ml-20">
        <h1 class="text-4xl">{{ project.title }}</h1>
        <br />
        <div class="flex my-5">
          <p><b>Position: </b>{{ project.position }}</p>
          <p class="ml-10"><b>Team Size: </b>{{ project.size }}</p>
        </div>
        <p><b>Description: </b>{{ project.description }}</p>
        <div class="my-5">
          <b>Technologies: </b>
          <div class="flex gap-5 my-5">
            <icon
              v-for="icon in project.technologies"
              :key="icon"
              :icon-name="icon"
            ></icon>
          </div>
        </div>
      </div>
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