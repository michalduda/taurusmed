<template>
  <section class="solutions">
    <image-text-wrapper v-bind="{ visual }">
      <about-navigation />
      <about-texts />
      <about-buttons />
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
</style>
