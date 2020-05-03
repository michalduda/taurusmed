<template>
  <section class="mission">
    <div class="row">
      <div class="col-12 offset-1 col-sm-8 offset-sm-3">
        <div class="mission__wrapper">
          <span class="bold">
            Medical
          </span>
          <span>
            /
          </span>
          <span class="bold">
            Digital
          </span>
          <span>
            /
          </span>
          <span>
            Wonderland
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
section.mission {
  margin-top: 100px;
  margin-bottom: 100px;
}
.mission__wrapper {
  font-size: 1.3rem;
  color: $color-primary;
  display: flex;
  justify-content: space-around;
  span {
    margin: 0 5px;
  }
  @include sm {
    font-size: 1.556rem;
    span {
      margin: 0 10px;
    }
  }
}
</style>
