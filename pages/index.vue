<template>
  <coming-soon v-if="isMobile"></coming-soon>
  <div v-else class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="optsV" ref="example">
      <welcome-section
        class="page-1 page"
        @to-project="$refs.example.$fullpage.moveTo(1, true)"
      ></welcome-section>
      <!-- PROJECT -->
      <project
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :class="['page-' + (index + 1), 'page', 'bg-sunbrust', 'text-cloud']"
      ></project>
      <!-- CONTACT -->
      <!-- <contact-section class="section bg-storm text-cloud"> </contact-section> -->
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
  components: {
    ContactSection,
    ProjectSection,
    WelcomeSection,
    ComingSoon,
    Project,
  },
}
</script>