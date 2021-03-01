<template>
  <div class="relative h-screen w-screen min-h-screen min-w-screen">
    <div class="fixed flex top-5 right-5 space-x-4">
      <a href="">
        <img
          class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
          src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
        />
      </a>

      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        src="https://img.icons8.com/fluent/48/000000/gmail--v1.png"
      />
      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        src="https://img.icons8.com/fluent/48/000000/linkedin.png"
      />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Social from '@/components/SocialPane'
export default {
  components: {
    Social,
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