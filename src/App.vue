<template>
  <div id="app">
    <navigation-menu />
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
import NavigationMenu from '@/components/global/NavigationMenu'
import SectionHeader from '@/components/header'
import SectionAbout from '@/components/about'
import SectionProduct from '@/components/product'
import SectionMission from '@/components/mission'
import SectionSolutions from '@/components/solutions'
import SectionContact from '@/components/contact'

export default {
  name: 'App',
  components: {
    NavigationMenu,
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
