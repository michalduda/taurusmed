<template>
  <section class="solutions">
    <image-text-wrapper v-bind="{ visual }">
      <solutions-texts />
      <solutions-buttons />
    </image-text-wrapper>
  </section>
</template>

<script>
import ImageTextWrapper from '@/components/global/ImageTextWrapper'
import SolutionsTexts from './SolutionsTexts'
import SolutionsButtons from './SolutionsButtons'

export default {
  components: {
    ImageTextWrapper,
    SolutionsTexts,
    SolutionsButtons
  },
  computed: {
    visual() {
      return {
        elementMobile: require('@/assets/solutions-visual-mobile.png'),
        element: require('@/assets/solutions-visual.png'),
        position: 'top center'
      }
    }
  }
}
</script>

<style>
</style>
