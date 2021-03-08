<template>
  <div class="flex-row pt-20 w-full px-5">
    <contact-info></contact-info>
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
export default {
  data() {
    return {
      sender: {
        lastname: '',
        firstname: '',
        email: '',
        message: '',
      },
    }
  },
  components: {
    ContactForm,
    ContactInfo,
  },
}
</script>

<style>
</style>