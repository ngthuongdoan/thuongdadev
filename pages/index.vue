<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div
      class="section bg-cloud flex flex-col items-center justify-center font-bold"
    >
      <div class="text-center text-black-900 text-6xl">
        <h1 class="mb-3">Hi!</h1>
        <h2>I build <span class="text-sunbrust">websites</span></h2>
      </div>
      <div class="flex w-screen justify-center content-around mt-10 gap-x-8">
        <a
          class="bg-transparent text-sunbrust font-semibold text-base px-5 py-1 rounded-full border border-sunbrust hover:bg-sunbrust hover:text-cloud transition-all duration-300 ease-in-out leading-8 cursor-pointer"
          href="#contact"
        >
          contact me
        </a>
        <img class="w-10 object-cover" src="~@/assets/icons/heart.png" alt="" />
        <a
          class="bg-storm font-semibold text-base text-cloud px-5 py-1 rounded-full border hover:bg-teal hover:text-cloud transition-all duration-300 ease-in-out leading-8 cursor-pointer"
          href="#project"
        >
          see projects
        </a>
      </div>
    </div>
    <!-- PROJECT -->
    <project-section class="section bg-sunbrust text-cloud"> </project-section>
    <!-- CONTACT -->
    <contact-section class="section bg-storm text-cloud"> </contact-section>
  </full-page>
</template>

<script>
import ContactSection from '@/components/section/ContactSection'
import ProjectSection from '@/components/section/ProjectSection'

export default {
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['', 'project', 'contact'],
        scrollBar: false,
      },
    }
  },
  components: {
    ContactSection,
    ProjectSection,
  },
}
</script>