<template>
  <div class="social__pane">
    <ul class="social__list">
      <li>
        <a
          href="https://www.facebook.com/MaFamille.Cafeteria"
          target="_blank"
        ></a>
      </li>
      <li>
        <a href="mailto:mafamille90@gmail.com" target="_blank"></a>
      </li>
      <li>
        <a href="tel:07103819432"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.social {
  &__pane {
    position: fixed;
    width: max-content;
    background-color: white;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  &__list {
    list-style-type: none;
    margin: 10px auto;
    li {
      margin: 15px 10px;
    }
    img {
      width: 20px;
    }
  }
}
</style>