<template>
  <div>
    <div
      class="h-screen bg-cloud flex flex-col items-center justify-center font-bold"
    >
      <div class="text-center text-black-900 text-6xl">
        <h1 class="mb-3">Hi!</h1>
        <h2>I build <span class="text-sunbrust">websites</span></h2>
      </div>
      <div class="flex w-screen justify-center content-around mt-10 gap-x-8">
        <button
          class="bg-transparent text-sunbrust font-semibold text-base px-5 py-1 rounded-full border border-sunbrust hover:bg-sunbrust hover:text-cloud transition-all duration-300 ease-in-out"
        >
          contact me
        </button>
        <img class="w-10 object-cover" src="~@/assets/icons/heart.png" alt="" />
        <button
          class="bg-storm font-semibold text-base text-cloud px-5 py-1 rounded-full border hover:bg-teal hover:text-cloud transition-all duration-300 ease-in-out"
          @click="toProject"
        >
          see projects
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toProject() {
      this.$emit('to-project')
    },
  },
}
</script>

<style>
</style>