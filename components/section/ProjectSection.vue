<template>
  <div class="slick__container">
    <img src="@/assets/icons/arrow.png" alt id="left-arrow-intro" />
    <slick ref="slick" :options="slickOptions">
      <project
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="slide bg-sunbrust text-cloud"
      ></project>
    </slick>
    <img src="@/assets/icons/arrow.png" alt id="right-arrow-intro" />
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Project from '@/components/Project'
import mockProjects from '@/service/projects'
export default {
  data() {
    return {
      projects: mockProjects,
      slickOptions: {
        dots: true,
        nextArrow: '#right-arrow-intro',
        prevArrow: '#left-arrow-intro',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    }
  },
  components: {
    Project,
    Slick,
  },
}
</script>

<style>
</style>