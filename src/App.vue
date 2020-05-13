<template>
  <div id="app">
    <navigation-menu />
    <section-header />
    <section-about />
    <section-product id="product" />
    <section-mission />
    <section-solutions id="solutions" />
    <section-contact
      id="contact"
      class="section--custom-margin"
    />
    <page-footer />
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
import PageFooter from '@/components/footer'

export default {
  name: 'App',
  components: {
    NavigationMenu,
    SectionHeader,
    SectionAbout,
    SectionProduct,
    SectionMission,
    SectionSolutions,
    SectionContact,
    PageFooter
  }
}
</script>

<style lang="scss">
#app {
  max-width: 1366px;
  margin: auto;
}
.section--custom-margin{
  margin-bottom: 50px;
  @include md{
    margin-bottom: 0;
  }
}
</style>
