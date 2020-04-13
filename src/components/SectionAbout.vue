<template>
  <section class="about">
    <div class="row">
      <div class="col-sm-7">
        <div class="about__visual-wrapper">
          <div class="about__visual"></div>
        </div>
      </div>
      <div class="col-sm-5 offset-1 about__text-wrapper">
        <about-navigation />
        <about-texts />
        <about-buttons />
      </div>
    </div>
  </section>
</template>

<script>
import AboutNavigation from '@/components/AboutNavigation'
import AboutButtons from '@/components/AboutButtons'
import AboutTexts from '@/components/AboutTexts'

export default {
  components: {
    AboutNavigation,
    AboutButtons,
    AboutTexts
  }
}
</script>

<style lang="scss">
.about__visual-wrapper {
  background: $color-primary;
  display: flex;
  flex-direction: row-reverse;
  width: 92.857%;
}
.about__visual {
  background: url('~@/assets/about-visual.png');
  mix-blend-mode: screen;
  background-size: cover;
  background-position: right top;
  width: 53.846%;
  min-height: 590px;
}
.about__text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
