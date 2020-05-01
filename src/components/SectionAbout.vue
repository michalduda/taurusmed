<template>
  <section class="about">
    <image-text-wrapper v-bind="{ visual }">
      <template v-slot:visual-slot>
        <div class="about-visual__logo-wrapper">
          <img
            src="@/assets/medictel-virtual-office.svg"
            alt="medictel-logo"
            class="about-visual__logo"
          >
        </div>
      </template>
      <template v-slot:default>
        <about-navigation />
        <about-texts />
        <about-buttons />
      </template>
    </image-text-wrapper>
  </section>
</template>

<script>
import ImageTextWrapper from '@/components/ImageTextWrapper'
import AboutNavigation from '@/components/AboutNavigation'
import AboutButtons from '@/components/AboutButtons'
import AboutTexts from '@/components/AboutTexts'

export default {
  components: {
    ImageTextWrapper,
    AboutNavigation,
    AboutButtons,
    AboutTexts
  },
  data() {
    return {
      visual: {
        element: require('@/assets/about-visual.png'),
        position: 'top right'
      }
    }
  }
}
</script>

<style>
.about-visual__logo-wrapper{
  flex: 1;
}
.about-visual__logo{
  display: block;
  width: 50%;
  margin: 50px auto;
}
</style>
