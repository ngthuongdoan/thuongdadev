<template>
  <div>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="w-0 h-0"
    >
      <defs>
        <symbol :id="icon.tags" viewBox="0 0 1000 1000">
          <title>{{ icon.tags[0] }}</title>
          <path :d="icon.paths[0]"></path>
        </symbol>
      </defs>
    </svg>
    <!-- :style="'fill:' + icon.attrs[0].fill" -->
    <svg class="w-8 h-8 inline-block" :style="'fill:' + icon.fill">
      <use :xlink:href="'#' + icon.tags[0]"></use>
    </svg>
  </div>
</template>

<script>
import icons from '@/service/icons'
export default {
  data() {
    return {
      icon: {},
    }
  },
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  created() {
    this.icon = icons.icons.find((ico) => {
      return ico.tags[0] === this.iconName
    })
  },
}
</script>

<style>
</style>