<template>
  <header class="main-header">
    <div class="row main-header__wrapper">
      <div class="col-sm-2 offset-1">
        <img class="main-header__logo" src="@/assets/taurusmed-logo.png" alt />
      </div>
      <div class="col-sm-11">
        <p class="main-header__claim">profesjonalne systemy informatyczne</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-header {
  &:before {
    content: '';
    display: block;
    background: $color-primary;
    height: 25px;
  }
}
.main-header__logo {
  width: 100%;
}
.main-header__wrapper {
  min-height: 65px;
  display: flex;
  align-items: center;
}
.main-header__claim {
  margin-left: 70px;
}
</style>
