<template>
  <div
    class="bg-cloud w-screen h-screen max-w-screen max-h-screen flex flex-col items-center justify-center font-bold overflow-hidden"
  >
    <div class="text-center text-black-900 text-6xl">
      <h1 class="mb-3">Hi!</h1>
      <h2>I build <span class="text-sunbrust">websites</span></h2>
    </div>
    <div class="flex content-around mt-10 gap-x-8">
      <button
        type="button"
        class="bg-transparent text-sunbrust font-semibold text-base px-5 py-1 rounded-full border border-sunbrust"
      >
        contact me
      </button>
      <img class="w-10 object-cover" src="~@/assets/icons/heart.png" alt="" />
      <button
        type="button"
        class="bg-storm font-semibold text-base text-cloud px-5 py-1 rounded-full border"
      >
        see projects
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>