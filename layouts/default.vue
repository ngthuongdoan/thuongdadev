<template>
  <div class="h-screen w-screen min-h-screen min-w-screen">
    <transition name="slide-in">
      <side-bar v-if="show"></side-bar>
    </transition>
    <div @click="showSidebar">
      <hover-bar :class="show ? 'active' : ''"></hover-bar>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import HoverBar from '@/components/HoverBar'

export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showSidebar() {
      console.log('clicked')
      this.show = !this.show
    },
  },
  components: {
    SideBar,
    HoverBar,
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
</style>