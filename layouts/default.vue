<template>
  <div class="relative h-screen w-screen min-h-screen min-w-screen">
    <Nuxt />
  </div>
</template>

<script>
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
</style>