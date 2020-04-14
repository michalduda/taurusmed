<template>
  <section class="mission">
    <div class="row">
      <div class="col-sm-8 offset-sm-3">
        <div class="mission__wrapper">
          <span class="bold">Medical</span>
          <span>/</span>
          <span class="bold">Digital</span>
          <span>/</span>
          <span>Wonderland</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.mission__wrapper{
  font-size: 28px;
  color: $color-primary;
  display: flex;
  justify-content: space-around;
  span {
    margin: 0 10px;
  }
}
</style>
