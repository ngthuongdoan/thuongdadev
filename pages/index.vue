<template>
  <loading-screen v-if="isLoading" v-once></loading-screen>
  <coming-soon v-else-if="isMobile"></coming-soon>
  <div v-else class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="optsV" ref="example">
      <welcome-section
        class="page-1 page"
        @to-project="$refs.example.$fullpage.moveTo(1, true)"
        @to-contact="$refs.example.$fullpage.moveTo(2, true)"
      ></welcome-section>
      <!-- PROJECT -->
      <project-section class="page-2 page"></project-section>
      <!-- CONTACT -->
      <contact-section class="page-3 bg-teal text-cloud flex">
      </contact-section>
    </div>
  </div>
</template>

<script>
import WelcomeSection from '@/components/section/WelcomeSection'
import ContactSection from '@/components/section/ContactSection'
import ComingSoon from '@/components/section/ComingSoon'
import ProjectSection from '@/components/section/ProjectSection'
import { isMobile } from 'mobile-device-detect'
import LoadingScreen from '@/components/LoadingScreen.vue'
export default {
  data() {
    return {
      optsV: {
        start: 0,
        dir: 'v',
        duration: 500,
        overflow: 'auto',
      },
      isMobile,
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
  },
  components: {
    ContactSection,
    ProjectSection,
    WelcomeSection,
    ComingSoon,
    LoadingScreen,
    ProjectSection,
  },
}
</script>
<style lang="scss">
.slick__container {
  position: relative;

  #left-arrow-intro {
    transform: scale(0.5) rotate(180deg);
    left: 0;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    top: 40%;
    z-index: 100;
  }
  #right-arrow-intro {
    right: 0;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    transform: scale(0.5);
    top: 40%;
    z-index: 100;
  }
}
</style>