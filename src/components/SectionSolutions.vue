<template>
  <section class="solutions">
    <image-text-wrapper v-bind="{ visual }">
      <solutions-texts />
      <solutions-buttons />
    </image-text-wrapper>
  </section>
</template>

<script>
import ImageTextWrapper from '@/components/ImageTextWrapper'
import SolutionsTexts from '@/components/SolutionsTexts'
import SolutionsButtons from '@/components/SolutionsButtons'

export default {
  components: {
    ImageTextWrapper,
    SolutionsTexts,
    SolutionsButtons
  },
  data() {
    return {
      visual: {
        element: require('@/assets/solutions-visual.png'),
        position: 'top left'
      }
    }
  }
}
</script>

<style>
</style>
