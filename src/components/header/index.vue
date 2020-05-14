<template>
  <header class="main-header">
    <div class="row justify-content-between justify-content-md-start main-header__wrapper">
      <div class="col-logo col-5 offset-1 col-sm-4 col-md-3 col-lg-2">
        <img
          class="main-header__logo"
          src="@/assets/taurusmed-logo.svg"
          alt
        />
      </div>
      <div class="col-claim col-12 offset-1 col-sm-11 col-md-8 offset-md-0">
        <p class="main-header__claim">
          {{ $t('header.claim') }}
        </p>
      </div>
      <div class="col-hamburger col-auto d-md-none">
        <header-hamburger />
      </div>
      <div class="col-languages d-none d-md-block">
        <language-picker />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderHamburger from '@/components/header/HeaderHamburger'
import LanguagePicker from '@/components/header/LanguagePicker'

export default {
  components: {
    HeaderHamburger,
    LanguagePicker
  }
}
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
.col-logo{}

.col-claim{
  order: 1
}
.col-hamburger{
  margin-right: 7.14286%;
  text-align: right;
  .hamburger{
    margin-right: -15px;
  }
}
.col-languages{
  order: 2;
  margin-right: (1/14*100%);
  text-align: right;
  margin-left: auto;
}
.main-header__logo {
  width: 100%;
}
.main-header__wrapper {
  min-height: 65px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  @include sm{
    margin: 20px 0;
  }
  @include md{
    min-height: 0;
    align-items: baseline;
    margin: 50px 0;
  }
}
.main-header__claim {
  // margin-left: 5.85%;
  margin-top: 0;
  font-size: .8em;
  @media (min-width: 460px){
    font-size: 1em;
  }
  @include md{
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 7.85%;
  }
}
</style>
