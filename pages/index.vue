<template>
  <coming-soon v-if="isMobile"></coming-soon>
  <div v-else class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="optsV" ref="example">
      <welcome-section
        class="page-1 page"
        @to-project="$refs.example.$fullpage.moveTo(1, true)"
        @to-contact="toLast"
      ></welcome-section>
      <!-- PROJECT -->
      <project
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :class="['page-' + (index + 1), '', 'bg-sunbrust', 'text-cloud']"
      ></project>
      <!-- CONTACT -->
      <contact-section class="page-10 bg-storm text-cloud flex">
      </contact-section>
    </div>
  </div>
</template>

<script>
import WelcomeSection from '@/components/section/WelcomeSection'
import ContactSection from '@/components/section/ContactSection'
import ComingSoon from '@/components/section/ComingSoon'
import ProjectSection from '@/components/section/ProjectSection'
import Project from '@/components/Project'
import mockProjects from '@/service/projects'
import { isMobile } from 'mobile-device-detect'
export default {
  data() {
    return {
      optsV: {
        start: 0,
        dir: 'v',
        duration: 500,
        overflow: 'auto',
      },
      projects: mockProjects,
      isMobile,
    }
  },
  computed: {
    lastSlide() {
      return 1 + this.projects.length
    },
  },
  methods: {
    toLast() {
      this.$refs.example.$fullpage.moveTo(this.lastSlide, true)
    },
  },
  components: {
    ContactSection,
    ProjectSection,
    WelcomeSection,
    ComingSoon,
    Project,
  },
}
</script>