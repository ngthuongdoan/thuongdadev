<template>
  <div
    class="hover-bar absolute h-screen w-56 bg-teal flex justify-center items-center cursor-pointer"
  >
    <img
      class="object-cover w-8 transform translate-x-2/4"
      src="~@/assets/icons/arrow.png"
      alt=""
    />
  </div>
</template>

<style>
.hover-bar {
  clip-path: ellipse(25% 50% at 50% 50%);
  transform: translateX(-50%);
  transition: all 0.5s ease;
}
.active {
  clip-path: ellipse(40% 50% at 50% 50%);
}
</style>