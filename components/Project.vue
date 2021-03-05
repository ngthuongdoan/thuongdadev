<template>
  <div class="slide" :data-anchor="project.id">
    <div
      class="w-screen h-screen flex lg:flex-row flex-col justify-start items-start mt-24 lg:px-20 px-5"
    >
      <div class="w-1/2">
        <img v-for="img in project.imgs" :src="img" :key="img" />
      </div>
      <div class="lg:ml-20">
        <a
          class="text-4xl text-cloud cursor-pointer hover:underline"
          :href="project.url"
          >{{ project.title }}</a
        >
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
        <div>
          <b>Responsibilities: </b>
          <ul>
            <li v-for="(res, index) in project.responsibilities" :key="index">
              {{ res }}
            </li>
          </ul>
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