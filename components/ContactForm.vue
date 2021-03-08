<template>
  <form class="ml-60 w-full justify-self-center">
    <div class="flex w-full mb-5">
      <div class="flex-1">
        <label for="">Name</label>
        <br />
        <input
          class="w-full px-3 py-2 text-storm font-medium rounded"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="ml-5 flex-1">
        <label for="">Email</label>
        <br />
        <input
          class="w-full px-3 py-2 text-storm font-medium rounded"
          type="email"
          name=""
          id=""
        />
      </div>
    </div>
    <div class="mb-5">
      <label for="">Title</label>
      <br />
      <input
        class="w-full px-3 py-2 text-storm font-medium rounded"
        type="text"
        name=""
        id=""
      />
    </div>
    <div class="mb-5">
      <label for="">Message</label>
      <br />
      <textarea
        class="w-full px-3 py-2 text-storm font-medium rounded"
        type="text"
        rows="10"
      ></textarea>
    </div>
    <button
      class="bg-sunbrust hover:bg-cloud hover:text-storm text-cloud font-bold px-4 py-2 rounded ease-in-out duration-300"
    >
      Send
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style>
</style>