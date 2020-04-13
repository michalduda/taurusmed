<template>
  <div id="app">
      <section-header />
      <section-about />
  </div>
</template>

<script>
import '@/styles/app.scss'
import SectionHeader from './components/SectionHeader.vue'
import SectionAbout from './components/SectionAbout.vue'

export default {
  name: 'App',
  components: {
    SectionHeader,
    SectionAbout
  }
}
</script>

<style lang="scss">
#app {
  max-width: 1366px;
  margin: auto;
}
</style>
