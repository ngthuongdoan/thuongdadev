<template>
  <div>
    <div
      class="w-screen h-screen flex lg:flex-row flex-col justify-start items-start mt-24 lg:px-20 px-5"
    >
      <div class="w-1/2">
        <img
          v-for="img in project.imgs"
          :src="img"
          :key="img"
          :alt="project.title"
        />
        <button
          v-if="project.isPermited"
          @click="viewCode(project.github)"
          class="mt-4 mr-5 px-5 py-3 bg-storm font-bold rounded-full ease-in-out duration-200 hover:bg-teal"
        >
          View Code
        </button>
        <button
          @click="viewSite(project.url)"
          class="mt-4 px-5 py-3 bg-cloud text-storm font-bold rounded-full ease-in-out duration-200 hover:bg-teal hover:text-cloud"
        >
          Live Site
        </button>
      </div>
      <div class="max-w-lg lg:ml-20">
        <a
          class="text-4xl text-cloud cursor-pointer hover:underline"
          :href="project.url"
          rel="noreferrer"
          target="_blank"
          :aria-label="project.title"
          >{{ project.title }}</a
        >
        <div class="flex my-5">
          <p><b>Position: </b>{{ project.position }}</p>
          <p class="ml-10"><b>Team Size: </b>{{ project.size }}</p>
        </div>
        <p><b>Description: </b>{{ project.description }}</p>
        <div class="my-5">
          <b>Technologies: </b>
          <div
            class="flex gap-5 my-5 bg-cloud w-min px-3 py-2 rounded bg-opacity-95"
          >
            <icon
              v-for="icon in project.technologies"
              :key="icon"
              :icon-name="icon"
              :title="icon"
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
  methods: {
    viewCode(github) {},
    viewSite(url) {},
  },
  components: {
    Icon,
  },
}
</script>

<style>
</style>