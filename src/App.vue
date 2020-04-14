<template>
  <div id="app">
      <section-header />
      <section-about />
      <section-product />
      <section-mission />
      <section-solutions />
      <section-contact />
  </div>
</template>

<script>
import '@/styles/app.scss'
import SectionHeader from '@/components/SectionHeader.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionProduct from '@/components/SectionProduct.vue'
import SectionMission from '@/components/SectionMission.vue'
import SectionSolutions from '@/components/SectionSolutions.vue'
import SectionContact from '@/components/SectionContact.vue'

export default {
  name: 'App',
  components: {
    SectionHeader,
    SectionAbout,
    SectionProduct,
    SectionMission,
    SectionSolutions,
    SectionContact
  }
}
</script>

<style lang="scss">
#app {
  max-width: 1366px;
  margin: auto;
}
</style>
