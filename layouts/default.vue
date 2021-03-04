<template>
  <div class="relative h-screen w-screen min-h-screen min-w-screen">
    <social-container></social-container>
    <Nuxt />
  </div>
</template>

<script>
import SocialContainer from '@/components/SocialContainer.vue'
export default {
  components: {
    SocialContainer,
  },
}
</script>
<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s ease;
}
.slide-in-enter, .slide-in-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0.8;
}
.grayscale {
  filter: grayscale(10);
  &:hover {
    filter: grayscale(0);
  }
}
</style>