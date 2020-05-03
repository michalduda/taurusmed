<template>
  <div class="solutions-buttons">
    <button
      class="solutions-button"
      @click="scrollToElement($event, 'section.contact')"
    >
      Skontaktuj się z nami
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
.solutions-buttons{
}
.solutions-button{
  margin-bottom: 25px;
  min-width: 225px;
  &:not(:last-of-type){
    margin-right: 25px;
  }
}
</style>
