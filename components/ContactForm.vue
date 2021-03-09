<template>
  <form class="ml-60 w-full justify-self-center" @submit.prevent="sendEmail">
    <div class="flex w-full mb-5">
      <div class="flex-1">
        <label for="">Name</label>
        <br />
        <input class="field" type="text" v-model="sender.name" />
      </div>
      <div class="ml-5 flex-1">
        <label for="">Email</label>
        <br />
        <input class="field" type="email" v-model="sender.email" />
      </div>
    </div>
    <div class="mb-5">
      <label for="">Title</label>
      <br />
      <input class="field" type="text" v-model="sender.title" />
    </div>
    <div class="mb-5">
      <label for="">Message</label>
      <br />
      <textarea
        class="field"
        type="text"
        rows="10"
        v-model="sender.message"
      ></textarea>
    </div>
    <input
      class="bg-sunbrust hover:bg-cloud hover:text-storm font-bold px-4 py-2 rounded ease-in-out duration-300"
      type="submit"
      value="Send"
    />
  </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      sender: {
        name: '',
        email: '',
        title: '',
        message: '',
      },
    }
  },
  methods: {
    async sendEmail(e) {
      const senderData = {
        service_id: 'service_vylcqel',
        template_id: 'template_y25hox9',
        user_id: 'user_EccjxXWbAYquEuXvVpvzo',
        template_params: this.sender,
      }
      const thankData = {
        service_id: 'service_vylcqel',
        template_id: 'template_o2777cm',
        user_id: 'user_EccjxXWbAYquEuXvVpvzo',
        template_params: this.sender,
      }
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const senderRequest = this.$axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        senderData,
        options
      )
      const thanksRequest = this.$axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        thankData,
        options
      )
      Swal.fire({
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 10000,
        onOpen: () => {
          Swal.showLoading()
        },
      })
      try {
        await Promise.all([senderRequest, thanksRequest])
        Swal.fire({
          icon: 'success',
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
        })
      }
    },
  },
}
</script>

<style>
</style>