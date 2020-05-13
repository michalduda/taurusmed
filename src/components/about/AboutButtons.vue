<template>
  <div class="about-buttons">
    <button
      class="about-button"
      @click="scrollToElement($event, '#product')"
    >
      Oprogramowanie
    </button>
    <button
      class="about-button"
      @click="scrollToElement($event, '#solutions')"
    >
      Rozwiązania indywidualne
    </button>
  </div>
</template>

<script>
import scrollToElement from '@/helpers/scrollToElement'

export default {
  methods: {
    scrollToElement
  }
}
</script>

<style lang="scss">
.about-buttons{
}
.about-button{
  margin-bottom: 25px;
  min-width: 225px;
  &:not(:last-of-type){
    margin-right: 25px;
  }
}
</style>
