<template>
  <div class="fixed flex top-5 right-5 space-x-4 z-10">
    <a rel="noreferrer" aria-label="Resume" href="/cv.pdf" download>
      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        alt="cv"
        src="https://img.icons8.com/fluent/48/000000/open-resume.png"
      />
    </a>
    <a
      href="https://github.com/ngthuongdoan"
      rel="noreferrer"
      aria-label="Github"
      target="_blank"
    >
      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        src="https://img.icons8.com/fluent/96/000000/github.png"
        alt="github"
      />
    </a>

    <a
      href="https://www.facebook.com/thuongdadev"
      rel="noreferrer"
      target="_blank"
      aria-label="Facebook"
    >
      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
        alt="facebook"
      />
    </a>
    <a
      href="mailto:ngthuongdoan@gmail.com"
      rel="noreferrer"
      aria-label="Gmail"
      target="_blank"
    >
      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        src="https://img.icons8.com/fluent/48/000000/gmail--v1.png"
        alt="mail"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/ngthuongdoan/"
      rel="noreferrer"
      target="_blank"
      aria-label="Linkedin"
    >
      <img
        class="w-7 object-contain transition-all duration-300 ease-in-out cursor-pointer grayscale"
        src="https://img.icons8.com/fluent/48/000000/linkedin.png"
        alt="linkedin"
      />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#cv {
  display: none;
}
#cv__icon:hover {
  #cv {
    display: block !important;
  }
}
</style>